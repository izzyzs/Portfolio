import Link from "next/link";
import { slugify, type PostMeta, type SeriesInfo } from "@/lib/journal/posts";

const WINDOW = 2; // parts shown on each side of the current one before the list collapses

function PartList({ parts, current, start }: { parts: PostMeta[]; current: string; start: number }) {
    return (
        <ol start={start} className="space-y-1 list-decimal pl-7 marker:text-muted marker:font-mono marker:text-sm">
            {parts.map((p) => (
                <li key={p.slug}>
                    {p.slug === current ? (
                        <span aria-current="page" className="font-heading italic">
                            {p.title}
                        </span>
                    ) : (
                        <Link href={`/journal/${p.slug}`} className="hover:text-gold">
                            {p.title}
                        </Link>
                    )}
                </li>
            ))}
        </ol>
    );
}

export default function SeriesBox({ series, current, compact = false }: { series: SeriesInfo; current: string; compact?: boolean }) {
    const seriesHref = `/journal/series/${slugify(series.name)}`;
    const next = series.parts[series.part]; // parts are 1-based, so this is the part after the current one

    if (compact) {
        return (
            <p className="mt-12 font-mono text-sm text-muted">
                {next ? (
                    <>
                        Next in {series.name}:{" "}
                        <Link href={`/journal/${next.slug}`} className="text-gold hover:underline">
                            Part {series.part + 1}, {next.title} →
                        </Link>
                    </>
                ) : (
                    <>
                        This is the latest part of{" "}
                        <Link href={seriesHref} className="text-gold hover:underline">
                            {series.name}
                        </Link>
                        .
                    </>
                )}
            </p>
        );
    }

    const total = series.parts.length;
    const from = Math.max(0, series.part - 1 - WINDOW);
    const to = Math.min(total, series.part + WINDOW);
    const collapsed = total > WINDOW * 2 + 1;

    return (
        <aside aria-label={`Series: ${series.name}`} className="mb-10 border-l-2 border-sage bg-surface px-5 py-4 rounded-r-sm">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-sage mb-3">
                <Link href={seriesHref} className="hover:text-ink">
                    Series · {series.name}
                </Link>{" "}
                · Part {series.part}
            </p>
            {collapsed ? (
                <details className="group">
                    <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer">
                        <div className="group-open:hidden">
                            <PartList parts={series.parts.slice(from, to)} current={current} start={from + 1} />
                        </div>
                        <span className="mt-2 inline-block font-mono text-xs text-muted hover:text-ink">
                            <span className="group-open:hidden">Show all {total} parts</span>
                            <span className="hidden group-open:inline">Show fewer</span>
                        </span>
                    </summary>
                    <div className="mt-2">
                        <PartList parts={series.parts} current={current} start={1} />
                    </div>
                </details>
            ) : (
                <PartList parts={series.parts} current={current} start={1} />
            )}
        </aside>
    );
}
