import { Amiri, Geist, Geist_Mono, Limelight, Rock_Salt } from "next/font/google";

// AMIRI

export const amiriHeavy = Amiri({
    weight: "700",
    subsets: ["arabic", "latin"],
    display: "swap",
});

export const amiriLight = Amiri({
    weight: "400",
    subsets: ["arabic", "latin"],
    display: "swap",
});

// GEIST

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// LIMELIGHT

export const limelight = Limelight({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

// ROCK SALT

export const rockSalt = Rock_Salt({
    weight: "400",
    subsets: ["latin"],
    fallback: ["cursive"],
    display: "swap",
});
