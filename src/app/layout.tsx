import type { Metadata } from "next";
import "./globals.css";
import { oldStandardTTLight } from "@/fonts/Fonts";

export const metadata: Metadata = {
    title: "Ismael Soumahoro",
    description: "Ismael Soumahoro's (IshTheCoder) Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${oldStandardTTLight.className} antialiased bg-slate-950  text-gray-200 border-gray-200`}>{children}</body>
        </html>
    );
}
