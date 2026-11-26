import Link from "next/link";
import { nav, site } from "@/content/site";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    return (
        <header className="md:sticky top-0 z-10 bg-ground border-b border-rule">
            <nav aria-label="Main" className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-3">
                <Link href="/" className="font-heading text-xl md:text-2xl font-medium no-underline">
                    {site.name}
                </Link>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    <ul className="flex gap-4 md:gap-6 font-mono text-sm">
                        {nav.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className="text-muted hover:text-ink transition-colors">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
}
