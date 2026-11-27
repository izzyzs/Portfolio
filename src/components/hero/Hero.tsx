import Link from "next/link";
import { site } from "@/content/site";

export default function Hero() {
    return (
        <section aria-labelledby="hero-name" className="py-20 md:py-32">
            <div className="mx-auto w-fit max-w-full">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted mb-6">Software engineer · Full-stack and systems</p>
                <h1 id="hero-name" className="grid leading-[0.95]" style={{ fontVariationSettings: "normal" }}>
                    <span className="font-body text-5xl sm:text-7xl md:text-8xl 3xl:text-[10rem]">Ismael</span>
                    <span className="font-name text-gold justify-self-end text-[2.6rem] sm:text-7xl md:text-8xl tracking-wide">SOUMAHORO</span>
                </h1>
                <p className="mt-10 max-w-xl text-xl">
                    I build practical full-stack software and go back to first principles on purpose, currently building an <em>HTTP Server in C</em>.
                </p>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm">
                    <Link href="/#projects" className="text-sage underline underline-offset-4 decoration-1">
                        Selected work
                    </Link>
                    <a href={site.resume} target="_blank" rel="noopener noreferrer" className="text-sage underline underline-offset-4 decoration-1">
                        Résumé (PDF)
                    </a>
                    <Link href="/#contact" className="text-sage underline underline-offset-4 decoration-1">
                        Get in touch
                    </Link>
                </div>
            </div>
        </section>
    );
}
