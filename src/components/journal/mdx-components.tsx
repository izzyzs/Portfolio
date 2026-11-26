import type { MDXComponents } from "mdx/types";
import type { ComponentProps, ReactNode } from "react";

// A boxed aside, for warnings, notes and asides that shouldn't interrupt the text.
function Note({ title, children }: { title?: string; children: ReactNode }) {
    return (
        <aside className="journal-note">
            {title && <p className="journal-note-title">{title}</p>}
            {children}
        </aside>
    );
}

function A({ href = "", ...props }: ComponentProps<"a">) {
    const external = /^https?:\/\//.test(href);
    return <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...props} />;
}

export const mdxComponents: MDXComponents = { Note, a: A };
