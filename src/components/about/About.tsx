import React from "react";

import Image from "next/image";
import SectionHeader from "../section-header";

import { amiriLight } from "@/fonts/Fonts";
import headShot from "%/headshot.png";

export default function About() {
    return (
        <section className="pt-12  lg:py-16" id="about">
            <div className="text-center p-8">
                <SectionHeader>About Me</SectionHeader>
                <div className="sm:flex">
                    {/* <div className="w-full sm:w-1/2 sm:h-[50%] relative float-left"> */}
                    <Image src={headShot} alt="Headshot photo of me" className="w-1/2 max-w-96 mx-auto pt-5 rounded-full float-left h-full" />
                    {/* <p className={`absolute text-xs lg:text-xl top-[15px] sm:top-[30px]   start-10 sm:start-[10px] md:start-[50px]  rotate-15 ${rockSalt.className}`}>
                            Thats me! &#x1F449;&#x1F3FE;
                        </p> */}
                    {/* lg:top-[90px] lg:start-[100px] */}
                    {/* </div> */}
                    <div className={`w-full text-justify text-xl indent-6 ${amiriLight.className}`}>
                        {/*
                        Hey, I’m Ismael Soumahoro, 

After graduating with a B.S. in Computer Science, I returned to a deeper study of systems through *Computer Systems: A Programmer’s Perspective* while continuing to build real software. My main recent project is a deployed full-stack e-commerce prototype for Today Beauty Supply, my family’s brick-and-mortar retail business. I built it to evaluate whether a custom storefront could support the business’s transition into online retail, implementing product browsing, categories, cart management, authentication-aware UI, inventory metadata, Stripe Checkout, and order confirmation.

The business ultimately chose Shopify for production because of its speed-to-market, admin tooling, payment handling, and operational simplicity. The prototype still served its purpose: it gave me a real business problem to model, build around, deploy, and reason through technically.

I’m now looking for a software engineering role where I can contribute, grow under experienced engineers, and keep building useful systems with strong fundamentals behind them.

                        */}
                        <p className="pt-7 px-7 2xl:px-24">
                            Hey! I&apos;m Ismael Soumahoro,a software engineer focused on building practical full-stack applications and strengthening my computer science foundations.
                        </p>
                        <p className="pt-7 px-7 2xl:px-24">
                            After graduating with a B.S. in Computer Science, I returned to a deeper study of systems through{" "}
                            <span className="font-bold">Computer Systems: A Programmer&apos;s Perspective</span> while continuing to build real software. My main recent project is a deployed
                            full-stack e-commerce prototype for Today Beauty Supply, my family&apos;s brick-and-mortar retail business. I built it to evaluate whether a custom storefront could support
                            the business&apos;s transition into online retail, implementing product browsing, categories, cart management, authentication-aware UI, inventory metadata, Stripe Checkout,
                            and order confirmation.
                        </p>
                        <p className="pt-7 px-7 2xl:px-24">
                            The business ultimately chose Shopify for production because of its speed-to-market, admin tooling, payment handling, and operational simplicity. The prototype still served
                            its purpose: it gave me a real business problem to model, build around, deploy, and reason through technically.
                        </p>
                        <p className="pt-7 px-7 2xl:px-24">
                            I&apos;m now looking for a software engineering role where I can contribute, grow under experienced engineers, and keep building useful systems with strong fundamentals
                            behind them.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
