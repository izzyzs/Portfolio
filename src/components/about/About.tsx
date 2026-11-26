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
                        After graduating with a B.S. in Computer Science, I returned to a deeper study of systems through <em>Computer Systems: A Programmer&apos;s Perspective</em> while continuing to
                        build real software. My main recent project is a deployed full-stack e-commerce prototype for Today Beauty Supply, my family&apos;s brick-and-mortar retail business. I built it
                        to evaluate whether a custom storefront could support the business&apos;s transition into online retail, implementing product browsing, categories, cart management,
                        authentication-aware UI, inventory metadata, Stripe Checkout, and order confirmation.
                    </p>
                    <p>
                        The business ultimately chose Shopify for production because of its speed-to-market, admin tooling, payment handling, and operational simplicity. The prototype still served its
                        purpose: it gave me a real business problem to model, build around, deploy, and reason through technically.
                    </p>
                    <p>I've since decided to deepen my fluency with CS fundamentals, this time learning by doing. I'm building an HTTP Server in C with the following objectives:</p>
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
                            network communication (past your everyday web framework.)
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
