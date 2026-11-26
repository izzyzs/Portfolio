import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSeries } from "@/lib/journal/posts";
import PostList from "@/components/journal/PostList";
import JournalHeader from "@/components/journal/JournalHeader";

type Props = { params: Promise<{ series: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return getAllSeries().map(({ slug }) => ({ series: slug }));
}

const find = (slug: string) => getAllSeries().find((s) => s.slug === slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const series = find((await params).series);
    return series ? { title: `${series.name} · Journal`, alternates: { canonical: `/journal/series/${series.slug}` } } : {};
}

export default async function SeriesPage({ params }: Props) {
    const series = find((await params).series);
    if (!series) notFound();
    return (
        <div className="pb-16">
            <JournalHeader eyebrow="Journal · Series" title={series.name}>
                <p>
                    {series.parts.length} {series.parts.length === 1 ? "part" : "parts"} so far, in reading order.{" "}
                    <Link href="/journal" className="underline decoration-rule underline-offset-4 hover:decoration-sage">
                        Back to all entries
                    </Link>
                </p>
            </JournalHeader>
            <PostList posts={series.parts} />
        </div>
    );
}
