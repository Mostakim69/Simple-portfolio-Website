import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-gray-800/50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    <i className="fas fa-user-circle mr-3"></i>About Me
                </h2>
                <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
                        <div className="w-64 h-64 rounded-full bg-teal-500/20 flex items-center justify-center">
                            <img src="https://i.pravatar.cc/300" alt="About Me" className="rounded-full w-60 h-60 shadow-2xl" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-12">
                        <p className="text-gray-400 leading-relaxed text-lg">
                            I'm Md Mostakim Hosen, a 21-year-old passionate web developer. I specialize in creating modern, responsive websites and am always eager to learn new technologies.
                        </p>
                        <p className="text-gray-400 leading-relaxed mt-6 text-lg">
                            My goal is to build engaging and user-friendly digital experiences. I thrive on challenges and am dedicated to delivering high-quality work.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;