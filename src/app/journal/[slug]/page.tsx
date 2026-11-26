import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getNeighbours, getPost, getPosts, getSeries } from "@/lib/journal/posts";
import { PostBody } from "@/lib/journal/mdx";
import SeriesBox from "@/components/journal/SeriesBox";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return getPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = getPost((await params).slug);
    if (!post) return {};
    return {
        title: post.title,
        description: post.summary,
        alternates: { canonical: `/journal/${post.slug}` },
        openGraph: { type: "article", url: `/journal/${post.slug}`, title: post.title, description: post.summary, publishedTime: post.date, tags: post.tags },
    };
}

export default async function PostPage({ params }: Props) {
    const post = getPost((await params).slug);
    if (!post) notFound();
    const series = getSeries(post);
    const { newer, older } = getNeighbours(post.slug);

    return (
        <article className="journal-article pt-12 lg:pt-16 pb-16">
            <header className="mb-10">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted mb-4">
                    <Link href="/journal" className="hover:text-ink">
                        Journal
                    </Link>
                    <span className="text-gold"> · {post.draft ? "Draft" : `No. ${post.issue}`}</span>
                </p>
                <h1 className="font-medium text-4xl md:text-5xl leading-tight">{post.title}</h1>
                {post.summary && <p className="mt-4 font-heading italic text-xl text-muted">{post.summary}</p>}
                <p className="mt-6 pt-4 border-t border-rule font-mono text-xs text-muted flex flex-wrap gap-x-3 gap-y-1">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{post.readingMinutes} min read</span>
                    {post.tags.length > 0 && (
                        <>
                            <span aria-hidden="true">·</span>
                            <span className="flex flex-wrap gap-x-2">
                                {post.tags.map((tag) => (
                                    <Link key={tag} href={`/journal/tags/${tag}`} className="text-sage hover:text-ink">
                                        #{tag}
                                    </Link>
                                ))}
                            </span>
                        </>
                    )}
                </p>
            </header>

            {series && <SeriesBox series={series} current={post.slug} />}

            <div className="journal-prose">
                <PostBody source={post.content} format={post.format} />
            </div>

            {series && <SeriesBox series={series} current={post.slug} compact />}

            <nav aria-label="More entries" className="mt-16 pt-6 border-t border-rule grid gap-6 sm:grid-cols-2">
                {older ? (
                    <Link href={`/journal/${older.slug}`} className="group no-underline">
                        <span className="block font-mono text-xs text-muted">← Earlier · No. {older.issue}</span>
                        <span className="font-heading text-lg group-hover:text-gold transition-colors">{older.title}</span>
                    </Link>
                ) : (
                    <span />
                )}
                {newer && (
                    <Link href={`/journal/${newer.slug}`} className="group no-underline sm:text-right">
                        <span className="block font-mono text-xs text-muted">Later · No. {newer.issue} →</span>
                        <span className="font-heading text-lg group-hover:text-gold transition-colors">{newer.title}</span>
                    </Link>
                )}
            </nav>
        </article>
    );
}
