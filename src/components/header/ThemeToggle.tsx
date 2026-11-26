"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

const options: { value: Theme; label: string }[] = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "system", label: "System" },
];

function readSaved(): Theme {
    try {
        const saved = localStorage.getItem("theme");
        if (saved === "light" || saved === "dark" || saved === "system") return saved;
    } catch {}
    // No saved choice: the site defaults to dark.
    return "dark";
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>("dark");

    useEffect(() => {
        setTheme(readSaved());
    }, []);

    function choose(next: Theme) {
        setTheme(next);
        const root = document.documentElement;
        try {
            localStorage.setItem("theme", next);
        } catch {}
        if (next === "system") delete root.dataset.theme;
        else root.dataset.theme = next;
    }

    return (
        <div role="radiogroup" aria-label="Colour theme" className="flex border border-rule rounded-sm font-mono text-xs">
            {options.map((o) => (
                <button
                    key={o.value}
                    type="button"
                    role="radio"
                    aria-checked={theme === o.value}
                    onClick={() => choose(o.value)}
                    className={`px-2 py-1 transition-colors ${theme === o.value ? "bg-ink text-ground" : "text-muted hover:text-ink"}`}
                >
                    {o.label}
                </button>
            ))}
        </div>
    );
}
