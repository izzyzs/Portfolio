import { Old_Standard_TT, Fraunces, Libre_Caslon_Display, IBM_Plex_Mono } from "next/font/google";

// Body text
export const oldStandard = Old_Standard_TT({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-old-standard",
});

// Headings (variable font, with the SOFT axis for the rounded "soft" setting)
export const fraunces = Fraunces({
    subsets: ["latin"],
    display: "swap",
    axes: ["SOFT", "opsz"],
    variable: "--font-fraunces",
});

// The surname in the hero
export const caslon = Libre_Caslon_Display({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-caslon",
});

// Code
export const plexMono = IBM_Plex_Mono({
    weight: ["400", "500"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-plex-mono",
});

export const fontVariables = [oldStandard.variable, fraunces.variable, caslon.variable, plexMono.variable].join(" ");
