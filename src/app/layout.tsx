import type { Metadata } from "next";
import "./globals.css";
import { fontVariables } from "@/fonts/Fonts";
import { site } from "@/content/site";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: {
        default: site.name,
        template: `%s · ${site.name}`,
    },
    description: site.description,
    openGraph: {
        type: "website",
        url: "/",
        siteName: site.name,
        title: site.name,
        description: site.description,
    },
    twitter: {
        card: "summary_large_image",
        creator: "@IshTheCoder",
    },
};

// Runs before first paint so the saved theme is applied without a flash.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`scroll-smooth ${fontVariables}`} suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
            </head>
            <body className="font-body antialiased text-lg leading-relaxed">
                <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-ground focus:px-3 focus:py-2">
                    Skip to content
                </a>
                <div className="mx-auto max-w-6xl px-5 sm:px-10 lg:px-16">
                    <Header />
                    <main id="main">{children}</main>
                </div>
                <Footer />
            </body>
        </html>
    );
}
