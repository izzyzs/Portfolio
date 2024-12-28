import React from "react";
import Image from "next/image";
import eCommerce from "%/basic-ecommerce-site-1.0.png";
import gitHubImage from "%/GitHub_Logo_White.png";
import weatherApp from "%/weatherapp.png";

const About = () => {
    return (
        <section className="py-12 text-gray-100 sm:py-12 lg:py-16" id="projects">
            <div className="text-center p-8">
                <hr />
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-6">Projects</h2>
                <hr />
                <div className="flex flex-wrap items-center mt-20 text-center">
                    <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                        <Image src={eCommerce} alt="gem" className="inline-block rounded shadow-lg border border-merino-400" />
                    </div>
                    <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                        <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl"> &#x0031;&#xFE0F;&#x20E3; E-commerce Outline</h3>
                        <p className="sm:text-xl mt-6 mb-3">
                            Built a basic, incomplete frame of an e-commerce website to learn more about the parts that play into the creation of one. This project allowed me to experience backend
                            development with Golang.
                        </p>
                        <h4 className="sm:text-[22px] font-bold">Technologies:</h4>
                        <ul className="sm:text-lg md:list-disc sm:ps-7">
                            <li>React (Frontend)</li>
                            <li>Go (Backend)</li>
                        </ul>
                        <a href="https://github.com/izzyzs/basic-ecommerce-site-1.0" target="_blank" className="border-t-4 border-gray-400 block">
                            <Image src={gitHubImage} alt="Github Link" className="h-8 block  border border-black hover:bg-gray-600 duration-300" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-wrap items-center mt-20 text-center">
                    <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                        <Image src={weatherApp} alt="gem" className="inline-block rounded shadow-lg border border-merino-400" />
                    </div>
                    <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                        <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl"> &#x0032;&#xFE0F;&#x20E3; WeatherApp</h3>
                        <p className="sm:text-xl mt-6 mb-3">Used a free OpenWeathermap API as my data source for current and future weather updates</p>
                        <h4 className="sm:text-[22px] font-bold">Technologies:</h4>
                        <ul className="sm:text-lg md:list-disc sm:ps-7">
                            <li>React (Frontend)</li>
                            <li>Node.Js/Express (Backend)</li>
                        </ul>
                        <a href="https://github.com/izzyzs/WeatherApp" target="_blank" className="border-t-4 border-gray-400 block">
                            <Image src={gitHubImage} alt="Github Link" className="h-8 block  border border-black hover:bg-gray-600 duration-300" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-wrap items-center mt-20 text-center">
                    {/* <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                        <img src="images/basic-ecommerce-site-1.0.png" alt="gem" className="inline-block rounded shadow-lg border border-merino-400" />
                    </div> */}
                    {/*  md:w-2/5 lg:w-1/2 md:text-left  */}
                    <div className="w-full px-4 mb-3 sm:mb-5 md:mb-10 text-center font-bold lg:pl-12">
                        <h3 className="mt-8 text-2xl md:mt-0 sm:text-4xl text-center"> Youtube</h3>
                        <p className="sm:text-xl my-6">I will soon be starting a project on my Youtube Channel where I deep dive into learning the C programming language. Stay tooned... &#x1f440;</p>
                        <a
                            href="https://www.youtube.com/@IshTheCoder"
                            target="_blank"
                            className="text-cyan-600 bg-slate-900 border-slate-900 px-3 py-2 rounded-lg font-bold  mt-4 hover:text-cyan-400 hover:bg-black hover:border hover:border-cyan-400 duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="my-svg bi bi-youtube inline me-2" viewBox="0 0 16 16">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                            </svg>
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
};

export default About;

// <section className="grid grid-cols-2 auto-rows-fr h-32">
//     <a className="group col-auto p-4 w-[100%] p-auto text-center items-center hover:scale-x-150 transition-[width] duration-300 ease-out border-2">
//         <h3 className="py-[50%]">projects</h3>
//     </a>
//     <a className="col-auto p-4 w-[100%] m-auto text-center group-hover:scale-50 transition-[width] duration-300 ease-out border-2">
//         <h3>projects</h3>
//     </a>
// </section>
