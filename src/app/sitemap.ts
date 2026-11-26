import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getAllSeries, getAllTags, getPosts } from "@/lib/journal/posts";

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getPosts().filter((p) => !p.draft);
    return [
        { url: site.url, changeFrequency: "monthly", priority: 1 },
        { url: `${site.url}/journal`, lastModified: posts[0]?.date, changeFrequency: "weekly", priority: 0.8 },
        ...posts.map((p) => ({ url: `${site.url}/journal/${p.slug}`, lastModified: p.date, priority: 0.7 })),
        ...getAllSeries().map(({ slug }) => ({ url: `${site.url}/journal/series/${slug}`, priority: 0.5 })),
        ...getAllTags().map(({ tag }) => ({ url: `${site.url}/journal/tags/${tag}`, priority: 0.3 })),
    ];
}
