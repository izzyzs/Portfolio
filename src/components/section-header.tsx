import React from "react";

type SectionHeaderProps = { children: React.ReactNode; id?: string; eyebrow?: string };

export default function SectionHeader({ children, id, eyebrow }: SectionHeaderProps) {
    return (
        <div className="border-t border-rule pt-8 mb-10">
            {eyebrow && <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted mb-2">{eyebrow}</p>}
            <h2 id={id} className="text-gold font-medium text-3xl md:text-4xl lg:text-5xl">
                {children}
            </h2>
        </div>
    );
}
