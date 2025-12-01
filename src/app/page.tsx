import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
    return (
        // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-(family-name:--font-geist-sans)">
        <>
            <div className="px-10 lg:px-20">
                <Header />
                <main className="gap-8 items-center sm:items-start">
                    <Hero />
                    <About />
                    <Projects />
                    <Contact />
                </main>
            </div>
            <Footer />
        </>
    );
}
