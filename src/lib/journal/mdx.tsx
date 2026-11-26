import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSidenotes from "./rehype-sidenotes";
import { mdxComponents } from "@/components/journal/mdx-components";

export function PostBody({ source }: { source: string }) {
    return (
        <MDXRemote
            source={source}
            components={mdxComponents}
            options={{
                mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [
                        rehypeSlug,
                        [rehypeAutolinkHeadings, { behavior: "append", properties: { className: ["heading-anchor"], ariaLabel: "Link to this section" }, content: { type: "text", value: "§" } }],
                        // Both themes are rendered; CSS picks one to match the site theme.
                        [rehypePrettyCode, { theme: { light: "vitesse-light", dark: "vitesse-dark" }, keepBackground: false, defaultLang: "plaintext" }],
                        rehypeSidenotes,
                    ],
                },
            }}
        />
    );
}
