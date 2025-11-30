import React from "react";
import { amiriHeavy, amiriLight } from "@/fonts/Fonts";
import "./header.css";

const Header = () => {
    return (
        <header className="header pt-4 border-b border-gray-600 bg-slate-800 sticky top-0 z-10">
            <nav className="grid grid-cols-3 gap-5 bg-inherit">
                <h1 className={`${amiriHeavy.className} md:text-3xl`}>Ismael Soumahoro.</h1>
                <ul className={`flex justify-end col-start-3`}>
                    <li className="mx-1">
                        <a href="#about" className="px-2 py-1 md:py-2 text-xs text-nowrap md:text-base hover:bg-zinc-700 transition duration-150 hover:ease-in-out">
                            About Me
                        </a>
                    </li>
                    <li className="mx-1">
                        <a href="#projects" className="px-2 py-1 md:py-2 text-xs md:text-base hover:bg-zinc-700 transition duration-150 hover:ease-in-out">
                            Projects
                        </a>
                    </li>
                    <li className="mx-1">
                        <a href="#contact" className="px-2 py-1 md:py-2 text-xs text-nowrap md:text-base hover:bg-zinc-700 transition duration-150 hover:ease-in-out">
                            Contact Me
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
