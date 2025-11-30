import React from "react";
import { limelight, dmSerifDisplay, quintessential, amiriLight } from "@/fonts/Fonts";

const Hero = () => {
    return (
        <section className="flex flex-col mx-auto w-[50%] my-[20%]">
            <span className={`${amiriLight.className} self-start mr-4 text-3xl sm:text-5xl md:text-7xl 2xl:text-9xl`}>Ismael</span>
            <span className={`${limelight.className} text-yellow-700 self-end ml-8 text-2xl sm:text-4xl md:text-6xl 2xl:text-8xl`}>SOUMAHORO</span>
        </section>
    );
};

export default Hero;
