import React from "react";
import { geistSans, rockSalt, amiriHeavy } from "@/fonts/Fonts";

const About = () => {
    return (
        <section id="about" className="relative text-center p-8">
            <hr />
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-6">About Me</h2>
            <hr />
            <div className="sm:flex">
                <div className="w-full sm:w-1/2 relative">
                    <img src="images/headshot.png" alt="Headshot photo of me" className="w-1/2  max-w-96 mx-auto pt-5 rounded-full" />
                    <p className={`absolute text-xs lg:text-xl top-[15px] sm:top-[30px]  md:top-[90px] start-10 sm:start-[10px] md:start-[100px] rotate-15 ${rockSalt.className}`}>
                        Thats me! &#x1F449;&#x1F3FE;
                    </p>
                </div>
                <div className="w-full sm:w-1/2 text-justify text-2xl">
                    <p className="pt-7 px-7">&#x27A1;&#xFE0F; Hi, my name is Ismael Soumahoro. I'm a fullstack developer with a focus on backend, creating scalable systems.</p>
                </div>
            </div>
        </section>
    );
};

export default About;
