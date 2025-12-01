import React from "react";
import { limelight, amiriLight } from "@/fonts/Fonts";
{
    /*, dmSerifDisplay, quintessential,*/
}

const Hero = () => {
    return (
        <section className="flex flex-col mx-auto w-[50%] my-[20%]">
            <span className={`${amiriLight.className} self-start mr-4 text-3xl sm:text-5xl md:text-7xl lg:text-8xl 3xl:text-[10rem]`}>Ismael</span>
            <span className={`${limelight.className} text-subtle-gold self-end ml-8 text-2xl sm:text-4xl md:text-6xl lg:text-7xl`}>SOUMAHORO</span>
        </section>
    );
};

export default Hero;
