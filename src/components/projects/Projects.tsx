import React from "react";

const About = () => {
    return (
        <section className="py-12 text-gray-100 sm:py-12 lg:py-16" id="projects">
            <div className="text-center p-8">
                <hr />
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-6">Projects</h2>
                <hr />
                <div className="flex flex-wrap items-center mt-20 text-left">
                    <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                        <img src="https://picsum.photos/400/240" alt="gem" className="inline-block rounded shadow-lg border border-merino-400" />
                    </div>
                    <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                        <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">Simple integration</h3>
                        <p className="sm:text-lg mt-6">
                            Use the LocaleData gem to download translations directly into your Ruby on Rails projects using the provided command line interface. Just create a project and follow the
                            step-by-step instructions.
                        </p>
                        <a href="">
                            <img src="#" alt="Github Link" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-wrap items-center mt-20 text-left">
                    <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                        <img src="https://picsum.photos/400/240" alt="project members" className="inline-block rounded shadow-lg border border-merino-400" />
                    </div>
                    <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                        <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">Easy collaboration</h3>
                        <p className="sm:text-lg mt-6">
                            All LocaleData projects are private. Each project can have multiple collaborators with different roles and access permissions. You determine who can see and edit your
                            translations. Just add admins, developers, translators and configure their access rights.
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center mt-20 text-left">
                    <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                        <img src="https://picsum.photos/400/240" alt="editor" className="inline-block rounded shadow-lg border border-merino-400" />
                    </div>
                    <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                        <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">No more syntax errors</h3>
                        <p className="sm:text-lg mt-6">
                            LocaleData provides you easy import/export functions for your YAML files. Use a simple editor with many predefined languages to manage your locales. LocaleData also
                            supports multiple translation types, such as simple text, plural forms, numbers, booleans, symbols, arrays, ...
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center mt-20 text-left">
                    <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                        <img src="https://picsum.photos/400/240" alt="bulk editing" className="inline-block rounded shadow-lg border border-merino-400" />
                    </div>
                    <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                        <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">Bulk editing</h3>
                        <p className="sm:text-lg mt-6">Do you need to change the path of many translation keys at once? No problem, just use the bulk editing feature and enjoy the results.</p>
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
