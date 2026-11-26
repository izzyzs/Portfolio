import type { ReactNode } from "react";

export default function JournalHeader({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
    return (
        <header className="pt-12 lg:pt-16 pb-10">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted mb-3">{eyebrow}</p>
            <h1 className="text-gold font-medium text-4xl md:text-5xl lg:text-6xl">{title}</h1>
            {children && <div className="mt-4 max-w-2xl text-muted">{children}</div>}
        </header>
    );
}
