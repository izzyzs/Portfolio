import Image from "next/image";
import SectionHeader from "../section-header";
import headShot from "%/headshot.webp";

export default function About() {
    return (
        <section aria-labelledby="about" className="scroll-mt-20 py-12 lg:py-16">
            <SectionHeader id="about">About Me</SectionHeader>
            <div className="grid gap-10 md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:items-start">
                <Image
                    src={headShot}
                    alt="Ismael Soumahoro smiling, wearing glasses and a checked shirt"
                    sizes="(min-width: 768px) 16rem, 12rem"
                    placeholder="blur"
                    className="w-48 md:w-full aspect-square rounded-full object-cover border border-rule mx-auto"
                />
                <div className="max-w-prose space-y-5">
                    <p>Hey! I&apos;m Ismael Soumahoro, a software engineer focused on building practical full-stack applications and strengthening my computer science foundations.</p>
                    <p>
                        After graduating with a B.S. in Computer Science, I decided to deepen my systems understanding by studying <em>Computer Systems: A Programmer&apos;s Perspective</em> while
                        continuing to build real software for business operations. I undertook the build of a deployed full-stack e-commerce prototype for Today Beauty Supply, a NY brick-and-mortar
                        retail business. I built it to evaluate whether a custom storefront could support the business&apos;s transition into online retail, implementing product browsing, categories,
                        cart management, authentication-aware UI, Stripe Checkout, and order confirmation.
                    </p>
                    <p>
                        We ultimately chose Shopify for production because of its speed-to-market, admin tooling, payment handling, and operational simplicity. The prototype still served its purpose:
                        it gave me a real business problem to model, build around, deploy, and reason through technically.
                    </p>
                    <p>
                        I ran the transition of our POS system from Lightspeed to Shopify POS, taking care of inventory imports consisting 49,454 SKUs and the transfer of 26,330 orders from September
                        1st 2025 until June 25th 2026, the final handoff date, to simplify the process of returns and exchanges that required said information. I'm also in charge of our Shopify
                        website, where I leverage coding agents and AI tools to handle the personalization of our theme, as well as the editing of and uploading of product photos.
                    </p>
                    <p>I've since returned back to gaining fluency with CS fundamentals, this time learning by doing. I'm building an HTTP server in C with the following objectives:</p>
                    <ol>
                        <li>
                            <em>Memory Management:</em> Learn responsible management of memory and appreciate the abstraction provided by garbage collectors in higher-level languages.
                        </li>
                        <li>
                            <em>Procedural Programming:</em> Build complex abstractions without the aid of object-oriented constructs.
                        </li>
                        <li>
                            <em>System Calls:</em> Gain intuition regarding the role the kernel plays in application functionality, as well as the transfer of control that occurs when applications
                            interact with the operating system.
                        </li>
                        <li>
                            <em>Concurrency:</em> Reason about how to take advantage of concurrency and parallelism to build robust and responsive applications.
                        </li>
                        <li>
                            <em>Networking and Protocols:</em> Develop understanding regarding the translation of protocol specifications into implementations, as well as a deeper understanding of
                            network communication beyond your standard web framework.
                        </li>
                    </ol>
                    <p>
                        I&apos;m now looking for a software engineering role where I can contribute, grow under experienced engineers, and keep building useful systems with strong fundamentals behind
                        them.
                    </p>
                </div>
            </div>
        </section>
    );
}
