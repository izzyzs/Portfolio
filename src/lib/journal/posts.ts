import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "src/content/posts");
const WORDS_PER_MINUTE = 230;

export type PostMeta = {
    slug: string;
    title: string;
    date: string; // ISO date, YYYY-MM-DD
    summary: string;
    tags: string[];
    series?: string;
    draft: boolean;
    issue: number; // 1-based, counted by date among published posts
    readingMinutes: number;
};

export type Post = PostMeta & { content: string; format: "md" | "mdx" };

export type SeriesInfo = {
    name: string;
    part: number;
    parts: PostMeta[];
};

// Drafts are visible while running `npm run dev`, hidden in production builds.
const showDrafts = process.env.NODE_ENV !== "production";

function toISODate(value: unknown, file: string): string {
    if (value instanceof Date) return value.toISOString().slice(0, 10);
    if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
    throw new Error(`${file}: "date" must be written as YYYY-MM-DD`);
}

function readingMinutes(content: string): number {
    const words = content
        .replace(/```[\s\S]*?```/g, " ") // code blocks are skimmed, not read word by word
        .split(/\s+/)
        .filter(Boolean).length;
    return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function readAll(): Post[] {
    if (!fs.existsSync(POSTS_DIR)) return [];
    const files = fs.readdirSync(POSTS_DIR).filter((f) => /\.mdx?$/.test(f));

    const posts = files.map((file) => {
        const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
        const { data, content } = matter(raw);
        if (!data.title) throw new Error(`${file}: missing "title"`);
        return {
            slug: file.replace(/\.mdx?$/, ""),
            title: String(data.title),
            date: toISODate(data.date, file),
            summary: data.summary ? String(data.summary) : "",
            tags: Array.isArray(data.tags) ? data.tags.map((t: unknown) => String(t).toLowerCase()) : [],
            series: data.series ? String(data.series) : undefined,
            draft: Boolean(data.draft),
            issue: 0,
            readingMinutes: readingMinutes(content),
            content,
            format: file.endsWith(".mdx") ? "mdx" : "md",
        } satisfies Post;
    });

    // Issue numbers count published posts only, oldest first, so a draft never takes a number.
    const byDateAsc = [...posts].sort((a, b) => a.date.localeCompare(b.date) || a.slug.localeCompare(b.slug));
    let n = 0;
    for (const p of byDateAsc) if (!p.draft) p.issue = ++n;

    return byDateAsc.filter((p) => showDrafts || !p.draft).reverse(); // newest first
}

let cache: Post[] | null = null;
function all(): Post[] {
    // Re-read on every call in dev so new files show up without a restart.
    if (showDrafts) return readAll();
    return (cache ??= readAll());
}

const strip = ({ content: _content, format: _format, ...meta }: Post): PostMeta => meta;

export function getPosts(): PostMeta[] {
    return all().map(strip);
}

export function getPost(slug: string): Post | undefined {
    return all().find((p) => p.slug === slug);
}

export function getAllTags(): { tag: string; count: number }[] {
    const counts = new Map<string, number>();
    for (const p of all()) for (const t of p.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
    return [...counts].map(([tag, count]) => ({ tag, count })).sort((a, b) => a.tag.localeCompare(b.tag));
}

export function getPostsByTag(tag: string): PostMeta[] {
    return getPosts().filter((p) => p.tags.includes(tag));
}

export function getSeries(post: PostMeta): SeriesInfo | undefined {
    if (!post.series) return undefined;
    const parts = getPosts()
        .filter((p) => p.series === post.series)
        .reverse(); // oldest first
    return { name: post.series, part: parts.findIndex((p) => p.slug === post.slug) + 1, parts };
}

export function getNeighbours(slug: string): { newer?: PostMeta; older?: PostMeta } {
    const posts = getPosts();
    const i = posts.findIndex((p) => p.slug === slug);
    return { newer: i > 0 ? posts[i - 1] : undefined, older: i >= 0 ? posts[i + 1] : undefined };
}

export function formatDate(iso: string): string {
    return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

export function slugify(s: string): string {
    return s
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}

export function getAllSeries(): { name: string; slug: string; parts: PostMeta[] }[] {
    const map = new Map<string, PostMeta[]>();
    for (const p of [...getPosts()].reverse()) if (p.series) map.set(p.series, [...(map.get(p.series) ?? []), p]);
    return [...map].map(([name, parts]) => ({ name, slug: slugify(name), parts }));
}
