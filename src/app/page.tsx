import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import LatestJournal from "@/components/journal/LatestJournal";
import Contact from "@/components/contact/Contact";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Projects />
            <LatestJournal />
            <Contact />
        </>
    );
}
