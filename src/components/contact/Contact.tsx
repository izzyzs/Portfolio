import React from "react";

const Contact = () => {
    return (
        <section className="pt-12 text-gray-100 lg:py-16" id="contact">
            <div className="text-center p-8">
                <hr />
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-6">Contact Me</h2>
                <hr />
                <section id="contact" className="animate-fade-in-up text-left pt-5" style={{ animationDelay: "0.8s" }}>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 focus:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 focus:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 focus:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="bg-white text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                            Send Message
                        </button>
                    </form>
                </section>
            </div>
        </section>
    );
};

export default Contact;
