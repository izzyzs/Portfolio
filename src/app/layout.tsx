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

// The page is served dark (data-theme="dark" on <html>), so first-time visitors
// get dark mode with no flash. This runs before first paint and applies a saved
// choice: "light", or "system" (no attribute, so the OS setting decides).
const themeScript = `try{var t=localStorage.getItem("theme"),d=document.documentElement;if(t==="light")d.dataset.theme=t;else if(t==="system")delete d.dataset.theme}catch(e){}`;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="dark" className={`scroll-smooth ${fontVariables}`} suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
            </head>
            <body className="font-body antialiased text-lg leading-relaxed min-h-dvh flex flex-col">
                <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-ground focus:px-3 focus:py-2">
                    Skip to content
                </a>
                <div className="flex-1 w-full mx-auto max-w-6xl px-5 sm:px-10 lg:px-16">
                    <Header />
                    <main id="main">{children}</main>
                </div>
                <Footer />
            </body>
        </html>
    );
}
