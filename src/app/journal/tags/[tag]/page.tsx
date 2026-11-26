import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllTags, getPostsByTag } from "@/lib/journal/posts";
import PostList from "@/components/journal/PostList";
import JournalHeader from "@/components/journal/JournalHeader";

type Props = { params: Promise<{ tag: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return getAllTags().map(({ tag }) => ({ tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { tag } = await params;
    return { title: `On ${decodeURIComponent(tag)} · Journal`, alternates: { canonical: `/journal/tags/${tag}` } };
}

export default async function TagPage({ params }: Props) {
    const tag = decodeURIComponent((await params).tag);
    const posts = getPostsByTag(tag);
    if (posts.length === 0) notFound();
    return (
        <div className="pb-16">
            <JournalHeader eyebrow="Journal · Subject" title={<>On {tag}</>}>
                <p>
                    {posts.length} {posts.length === 1 ? "entry" : "entries"}.{" "}
                    <Link href="/journal" className="underline decoration-rule underline-offset-4 hover:decoration-sage">
                        Back to all entries
                    </Link>
                </p>
            </JournalHeader>
            <PostList posts={posts} />
        </div>
    );
}
