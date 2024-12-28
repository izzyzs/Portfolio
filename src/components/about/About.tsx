import React from "react";
import { rockSalt } from "@/fonts/Fonts";
import Image from "next/image";

const About = () => {
    return (
        <section className="pt-12 text-gray-100 lg:py-16" id="about">
            <div className="text-center p-8">
                <hr />
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-6">About Me</h2>
                <hr />
                <div className="sm:flex">
                    <div className="w-full sm:w-1/2 relative">
                        <Image src="images/headshot.png" alt="Headshot photo of me" className="w-1/2 max-w-96 mx-auto pt-5 rounded-full" />
                        <p className={`absolute text-xs lg:text-xl top-[15px] sm:top-[30px]  lg:top-[90px] start-10 sm:start-[10px] md:start-[50px] lg:start-[100px] rotate-15 ${rockSalt.className}`}>
                            Thats me! &#x1F449;&#x1F3FE;
                        </p>
                    </div>
                    <div className="w-full sm:w-1/2 text-left md:text-justify text-xl">
                        <p className="pt-7 px-7 2xl:px-24">&#x27A1;&#xFE0F; Hi, I&apos;m Ismael Soumahoro, a fullstack developer with a focus on backend, creating reliable, scalable systems.</p>
                        <p className="pt-7 px-7 2xl:px-24">&#x27A1;&#xFE0F; I aim to develop tools and systems that simplify complex problems and create seamless user experiences.</p>
                        <p className="pt-7 px-7 2xl:px-24">&#x27A1;&#xFE0F; Despite not having any internships, what I lack in experience I make up in vigor and willingness to learn and grow</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
