import Image from "next/image";
import { limelight } from "@/fonts/Fonts";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import About from "@/components/about/About";

export default function Home() {
    return (
        // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="px-3 text-gray-200 border-gray-200">
            <Header />
            <main className="gap-8 items-center sm:items-start">
                <Hero />
                <About />
                <Projects />
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
        </div>
    );
}
