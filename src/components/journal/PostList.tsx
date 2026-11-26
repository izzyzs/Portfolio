import Link from "next/link";
import { formatDate, type PostMeta } from "@/lib/journal/posts";

// The journal's table of contents: issue number, title, a dotted leader, then the date.
export default function PostList({ posts }: { posts: PostMeta[] }) {
    if (posts.length === 0) return <p className="text-muted italic">Nothing here yet.</p>;
    return (
        <ol className="divide-y divide-rule border-y border-rule">
            {posts.map((post) => (
                <li key={post.slug} className="py-6">
                    <Link href={`/journal/${post.slug}`} className="group block no-underline">
                        <div className="flex items-baseline gap-3">
                            <span className="font-heading italic text-gold shrink-0 w-14">{post.draft ? "Draft" : `No. ${post.issue}`}</span>
                            <span className="font-heading text-xl md:text-2xl font-medium group-hover:text-gold transition-colors">{post.title}</span>
                            <span aria-hidden="true" className="hidden md:block flex-1 border-b border-dotted border-muted/60 translate-y-[-0.3em] min-w-8" />
                            <time dateTime={post.date} className="hidden md:block shrink-0 font-mono text-xs text-muted">
                                {formatDate(post.date)}
                            </time>
                        </div>
                        <div className="sm:pl-[4.25rem] mt-1">
                            {post.summary && <p className="text-muted">{post.summary}</p>}
                            <p className="mt-1 font-mono text-xs text-muted">
                                <time dateTime={post.date} className="md:hidden">
                                    {formatDate(post.date)} ·{" "}
                                </time>
                                {post.readingMinutes} min read
                                {post.series && <> · {post.series}</>}
                            </p>
                        </div>
                    </Link>
                </li>
            ))}
        </ol>
    );
}
