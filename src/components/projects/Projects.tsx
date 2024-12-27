import React from "react";

const About = () => {
    return (
        <section className="py-12 text-gray-100 sm:py-12 lg:py-16" id="projects">
            <div className="text-center p-8">
                <hr />
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-6">Projects</h2>
                <hr />
                <div className="flex flex-wrap items-center mt-20 text-center">
                    <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                        <img src="images/basic-ecommerce-site-1.0.png" alt="gem" className="inline-block rounded shadow-lg border border-merino-400" />
                    </div>
                    <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                        <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl"> &#x0031;&#xFE0F;&#x20E3; E-commerce Frame</h3>
                        <p className="sm:text-xl mt-6 mb-3">
                            Built a basic, incomplete frame of an e-commerce website to learn more about the parts that play into the creation of one. This project allowed me to experience more hand's
                            on experience with Golang.
                        </p>
                        <h4 className="sm:text-[22px] font-bold">Technologies:</h4>
                        <ul className="sm:text-lg sm:list-disc sm:ps-7">
                            <li>React (Frontend)</li>
                            <li>Go (Backend)</li>
                        </ul>
                        <a href="https://github.com/izzyzs/basic-ecommerce-site-1.0" target="_blank" className="">
                            <img src="/images/GitHub_Logo_White.png" alt="Github Link" className="h-8 pt-2 block border-t-4 border-gray-400" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-wrap items-center mt-20 text-center">
                    <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                        <img src="images/basic-ecommerce-site-1.0.png" alt="gem" className="inline-block rounded shadow-lg border border-merino-400" />
                    </div>
                    <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                        <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl"> &#x0031;&#xFE0F;&#x20E3; E-commerce Frame</h3>
                        <p className="sm:text-xl mt-6 mb-3">
                            Built a basic, incomplete frame of an e-commerce website to learn more about the parts that play into the creation of one. This project allowed me to experience more hand's
                            on experience with Golang.
                        </p>
                        <h4 className="sm:text-[22px] font-bold">Technologies:</h4>
                        <ul className="sm:text-lg sm:list-disc sm:ps-7">
                            <li>React (Frontend)</li>
                            <li>Go (Backend)</li>
                        </ul>
                        <a href="https://github.com/izzyzs/basic-ecommerce-site-1.0" target="_blank" className="">
                            <img src="/images/GitHub_Logo_White.png" alt="Github Link" className="h-8 pt-2 block border-t-4 border-gray-400" />
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
