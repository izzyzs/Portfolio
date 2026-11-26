import type { Metadata } from "next";
import Link from "next/link";
import { getAllTags, getPosts } from "@/lib/journal/posts";
import PostList from "@/components/journal/PostList";
import JournalHeader from "@/components/journal/JournalHeader";

export const metadata: Metadata = {
    title: "Journal",
    description: "Notes on systems programming, computer science and building software.",
    alternates: { canonical: "/journal", types: { "application/rss+xml": "/journal/feed.xml" } },
};

export default function JournalIndex() {
    const posts = getPosts();
    const tags = getAllTags();
    return (
        <div className="pb-16">
            <JournalHeader eyebrow="Entries, newest first" title="Journal">
                <p>Notes on systems programming, computer science and building software.</p>
            </JournalHeader>

            <PostList posts={posts} />

            <div className="mt-12 flex flex-wrap items-start justify-between gap-8">
                {tags.length > 0 && (
                    <nav aria-label="Subjects" className="max-w-xl">
                        <h2 className="font-mono text-xs uppercase tracking-[0.12em] text-muted mb-3">Index of subjects</h2>
                        <ul className="flex flex-wrap gap-2 font-mono text-xs">
                            {tags.map(({ tag, count }) => (
                                <li key={tag}>
                                    <Link href={`/journal/tags/${tag}`} className="inline-block border border-rule rounded-sm px-2 py-0.5 text-muted hover:text-ink hover:border-sage transition-colors">
                                        {tag} <span className="text-muted/70">({count})</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
                <a href="/journal/feed.xml" className="font-mono text-xs text-muted hover:text-ink">
                    RSS feed
                </a>
            </div>
        </div>
    );
}
