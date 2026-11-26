import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { formatDate, getPost, getPosts } from "@/lib/journal/posts";

export const alt = "Journal entry";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
    return getPosts().map(({ slug }) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
    const post = getPost((await params).slug);
    return new ImageResponse(
        (
            <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px 96px", background: "#0b1324", color: "#e8e2d4", fontFamily: "serif" }}>
                <div style={{ display: "flex", fontSize: 28, color: "#cba65e", letterSpacing: 3 }}>
                    {`JOURNAL · ${post?.draft ? "DRAFT" : `NO. ${post?.issue ?? ""}`}`}
                </div>
                <div style={{ display: "flex", fontSize: (post?.title.length ?? 0) > 60 ? 64 : 80, lineHeight: 1.1 }}>{post?.title ?? site.name}</div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#98a0b3", borderTop: "2px solid #26324d", paddingTop: 24 }}>
                    <span>{site.name}</span>
                    <span>{post ? formatDate(post.date) : ""}</span>
                </div>
            </div>
        ),
        size,
    );
}
