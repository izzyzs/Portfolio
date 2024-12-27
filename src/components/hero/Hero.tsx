import React from "react";
import { limelight } from "@/fonts/Fonts";

const Hero = () => {
    return (
        <section className="flex flex-col mx-auto w-[50%] my-[20%]">
            <p className="self-start mr-4 text-3xl sm:text-5xl md:text-7xl 2xl:text-9xl">Ismael</p>
            <p className={`${limelight.className} self-end ml-8 text-2xl sm:text-4xl md:text-6xl 2xl:text-8xl`}>SOUMAHORO</p>
        </section>
    );
};

export default Hero;
