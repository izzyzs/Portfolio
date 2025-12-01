import React from "react";

type SectionHeaderProps = { children: React.ReactNode; textColor?: string; hrColor?: string };

export default function SectionHeader({ children, textColor, hrColor }: SectionHeaderProps) {
    return (
        <>
            <hr className={`${hrColor ?? ""}`} />
            <h2 className={`${textColor ?? "text-subtle-gold"} font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-6`}>{children}</h2>
            <hr className={`${hrColor ?? ""}`} />
        </>
    );
}
