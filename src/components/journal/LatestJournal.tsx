import Link from "next/link";
import SectionHeader from "../section-header";
import { getPosts } from "@/lib/journal/posts";
import PostList from "./PostList";

export default function LatestJournal() {
    const posts = getPosts().slice(0, 3);
    if (posts.length === 0) return null;
    return (
        <section aria-labelledby="journal" className="scroll-mt-20 py-12 lg:py-16">
            <SectionHeader id="journal" eyebrow="Latest from the">
                Journal
            </SectionHeader>
            <PostList posts={posts} />
            <p className="mt-6 font-mono text-sm">
                <Link href="/journal" className="text-gold hover:underline">
                    All entries →
                </Link>
            </p>
        </section>
    );
}
