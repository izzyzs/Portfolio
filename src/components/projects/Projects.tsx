import React from "react";

// Media
import eCommerce from "%/basic-ecommerce-site-1.0.png";
import gitHubImage from "%/GitHub_Logo_White.png";
import weatherApp from "%/weatherapp.png";
import tbsSite from "%/tbs-e-commerce.png";
import csApp from "%/csapp3e-cover.png";
import youtube from "%/svg/youtube.svg";

// Fonts
import { oldStandardTTLight, quintessential } from "@/fonts/Fonts";

// Types
import Project from "@/lib/types/project-description";

// TSX componente
import Image from "next/image";
import SectionHeader from "../section-header";

const projects: Project[] = [
    {
        image: tbsSite,
        title: "TBS E-commerce Site",
        summary: "Building an e-commerce platform for my family's business.",
        technologies: ["Next.js w/ TS (Frontend)", "shadcn/ui (UI components)", "Supabase (Database and Auth)", "ChatGPT and other LLMs (Debugging assistants)"],
        link: "https://github.com/izzyzs/tbs-ecomm-prototyping",
        inProgress: true,
    },
    {
        image: csApp,
        title: "Self Study of CS:APP",
        summary: "Strengthening computer science and systems fundamentals through an intensive self study of Computer Systems: A Programmer's Perspective",
        technologies: ["C and x86-64 Assembly"],
        inProgress: true,
    },
    {
        image: eCommerce,
        title: "E-commerce Practice",
        summary:
            "Built a basic, incomplete frame of an e-commerce website to learn more about the parts that play into the creation of one. This allowed me to reinforce my intuition regarding common backend paradigms (e.g. auth handling with JWTs) through the use of a new language (Go).",
        technologies: ["React w/ TS (Frontend)", "Go (Backend)"],
        link: "https://github.com/izzyzs/basic-ecommerce-site-1.0",
    },
    {
        image: weatherApp,
        title: "WeatherApp",
        summary: "Used a free OpenWeathermap API as my data source for current and future weather updates",
        technologies: ["React w/ TS (Frontend)", "Node.Js/Express (Backend)"],
        link: "https://github.com/izzyzs/WeatherApp",
    },
];

export default function Projects() {
    return (
        <section className="py-12 sm:py-12 lg:py-16" id="projects">
            <div className="text-center p-8">
                <SectionHeader>Projects</SectionHeader>
                {projects.map((project, idx) => (
                    <div key={idx} className="flex flex-wrap items-center mt-20 text-center">
                        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                            <Image src={project.image} alt="gem" className="inline-block rounded shadow-lg border border-merino-400" />
                        </div>
                        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                                {" "}
                                <span className={`${quintessential.className} text-4xl`}>{idx + 1}.</span> {`${project.title} ${project.inProgress ? "(In Progress...)" : ""}`}
                            </h3>
                            <p className="sm:text-xl mt-6 mb-3">{project.summary}</p>
                            <h4 className="sm:text-[22px] font-bold">Technologies:</h4>
                            <ul className="sm:text-lg md:list-disc sm:ps-7">
                                {project.technologies.map((tech, idx) => (
                                    <li key={idx}>{tech}</li>
                                ))}
                            </ul>
                            {project.link ? (
                                <a href={project.link} target="_blank" className="mt-3 p-3 border-t mx-auto w-20 block border border-graphite rounded-sm hover:bg-gray-600 duration-300">
                                    <Image src={gitHubImage} alt="Github Link" className="" />
                                </a>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                ))}

                <div className="flex flex-wrap items-center mt-20 text-center">
                    {/* <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                        <img src="images/basic-ecommerce-site-1.0.png" alt="gem" className="inline-block rounded shadow-lg border border-merino-400" />
                    </div> */}
                    {/*  md:w-2/5 lg:w-1/2 md:text-left  */}
                    <div className="w-full px-4 mb-3 sm:mb-5 md:mb-10 text-center font-bold lg:pl-12">
                        <h3 className="mt-8 text-2xl md:mt-0 sm:text-4xl text-center"> Youtube</h3>
                        <p className="sm:text-xl my-6">
                            I will soon be starting a project on my Youtube Channel where I document my process of growing as a not only a developer but as a{" "}
                            <span className={`${oldStandardTTLight.className} italic`}>computer scientist...</span>
                        </p>
                        <a
                            href="https://www.youtube.com/@IshTheCoder"
                            target="_blank"
                            className="text-cyan-600 bg-slate-900 border-slate-900 px-3 py-2 rounded-lg font-bold  mt-4 hover:text-cyan-400 hover:bg-black hover:border hover:border-cyan-400 duration-300"
                        >
                            <Image src={youtube} alt="youtube icon" className="inline pr-1" />
                            Youtube
                        </a>
                    </div>
                    <div className="w-full px-4 text-center font-bold lg:pl-12">
                        <h3 className="mt-8 text-2xl md:mt-0 sm:text-4xl text-center"> Resume</h3>
                        <p className="sm:text-xl my-6">Want more information? My resume is attached below.</p>
                        <a
                            href="Ismael_Soumahoro_Resume.pdf"
                            target="_blank"
                            className="text-cyan-600 bg-slate-900 border-slate-900 px-3 py-2 rounded-lg font-bold  mt-4 hover:text-cyan-400 hover:bg-black hover:border hover:border-cyan-400 duration-300"
                        >
                            Click Here
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

// <section className="grid grid-cols-2 auto-rows-fr h-32">
//     <a className="group col-auto p-4 w-full p-auto text-center items-center hover:scale-x-150 transition-[width] duration-300 ease-out border-2">
//         <h3 className="py-[50%]">projects</h3>
//     </a>
//     <a className="col-auto p-4 w-full m-auto text-center group-hover:scale-50 transition-[width] duration-300 ease-out border-2">
//         <h3>projects</h3>
//     </a>
// </section>
