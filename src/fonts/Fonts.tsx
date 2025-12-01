import { Quintessential, Old_Standard_TT, Amiri, Geist, Geist_Mono, Limelight, Rock_Salt, DM_Serif_Display } from "next/font/google";

// AMIRI

export const quintessential = Quintessential({
    weight: "400",
    subsets: ["latin"],
    fallback: ["serif"],
    display: "swap",
});

export const oldStandardTTLight = Old_Standard_TT({
    weight: "400",
    subsets: ["latin"],
    fallback: ["serif"],
    display: "swap",
});
export const oldStandardTTHeavy = Old_Standard_TT({
    weight: "700",
    subsets: ["latin"],
    fallback: ["serif"],
    display: "swap",
});

export const amiriHeavy = Amiri({
    weight: "700",
    subsets: ["latin"],
    fallback: ["serif"],
    display: "swap",
});

export const amiriLight = Amiri({
    weight: "400",
    subsets: ["arabic", "latin"],
    fallback: ["serif"],
    display: "swap",
});

// GEIST

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    fallback: ["sans-serif"],
});

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    fallback: ["monospace"],
});

// LIMELIGHT

export const limelight = Limelight({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    fallback: ["sans-serif"],
});

// ROCK SALT

export const rockSalt = Rock_Salt({
    weight: "400",
    subsets: ["latin"],
    fallback: ["cursive"],
    display: "swap",
});

// DM SERIF DISPLAY

export const dmSerifDisplay = DM_Serif_Display({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    fallback: ["serif"],
});
