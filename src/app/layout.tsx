import type { Metadata } from "next";
import "./globals.css";
import { amiriLight, oldStandardTTLight } from "@/fonts/Fonts";

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
            <body className={`${oldStandardTTLight.className} antialiased`}>{children}</body>
        </html>
    );
}
