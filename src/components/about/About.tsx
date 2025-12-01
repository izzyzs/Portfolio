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
                        <p className="pt-7 px-7 2xl:px-24">
                            Hey! My name is Ismael Soumahoro and I&apos;m an aspiring Software Engineer. After graduating last May, I decided to strengthen my computer science foundations by studying
                            Computer Systems: A Programmer&apos;s Perspective. I came to realize that becoming job ready means more than theory; it requires building software that solves real
                            problems.
                        </p>
                        <p className="pt-7 px-7 2xl:px-24">
                            With that in mind, I shifted my attention toward building an e-commerce application. My father had considered hiring a developer to build an e-commerce site with particular
                            requirements for our brick-and-mortar retail business. I volunteered to work on the site as an opportunity to design and build client-facing software with real-world
                            requirements. He agreed, and as such, I began building the platform.
                        </p>
                        <p className="pt-7 px-7 2xl:px-24">
                            Originally, I planned to complete the project before seeking employment. I came to recognize, however, that what I&apos;ve built so far demonstrates my engineering ability.
                            I am now looking for a role where I can grow under the mentorship of experienced engineers and build impactful software.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
