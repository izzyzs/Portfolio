import type Project from "@/lib/types/project-description";

import tbsSite from "%/tbs-e-commerce.webp";
import csApp from "%/csapp3e-cover.webp";
import eCommerce from "%/basic-ecommerce-site-1.0.webp";

export const projects: Project[] = [
    {
        image: tbsSite,
        imageAlt: "Home page of the Today Beauty Supply storefront prototype, showing featured products and categories",
        title: "Today Beauty Supply E-Commerce Prototype",
        summary:
            "Built and deployed a full-stack e-commerce prototype for my family’s beauty supply business, featuring product browsing, categories, cart management, inventory metadata, authentication-aware UI, Stripe Checkout, and order confirmation.",
        technologies: ["Next.js", "TypeScript", "Supabase/PostgreSQL", "Stripe Checkout", "Tailwind CSS", "shadcn/ui", "Vercel"],
        demo: "https://tbs-ecomm-prototyping-store-front.vercel.app/",
        link: "https://github.com/izzyzs/tbs-ecomm-prototyping",
    },
    {
        image: csApp,
        imageAlt: "Cover of Computer Systems: A Programmer's Perspective, third edition",
        title: "Self Study of CS:APP",
        summary: "Strengthening computer science and systems fundamentals through an intensive self study of Computer Systems: A Programmer's Perspective.",
        technologies: ["C", "x86-64 Assembly"],
        inProgress: true,
    },
    {
        image: eCommerce,
        imageAlt: "Home page of the practice e-commerce site with a product hero and placeholder product cards",
        title: "E-commerce Practice",
        summary:
            "Built a basic frame of an e-commerce website to learn more about the parts that play into the creation of one. This allowed me to reinforce my intuition regarding common backend paradigms (e.g. auth handling with JWTs) through the use of Go.",
        technologies: ["React with TypeScript (frontend)", "Go (backend)"],
        link: "https://github.com/izzyzs/basic-ecommerce-site-1.0",
    },
];
