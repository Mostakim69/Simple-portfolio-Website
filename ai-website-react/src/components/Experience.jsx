import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="py-24">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    <i className="fas fa-briefcase mr-3"></i>Work Experience
                </h2>
                <div className="relative border-l-4 border-teal-500/30 pl-10">
                    <div className="mb-12 relative">
                        <div className="absolute -left-12 -top-1.5 w-8 h-8 bg-gray-900 border-4 border-teal-500 rounded-full"></div>
                        <h3 className="text-2xl font-bold text-white">Freelance Web Developer</h3>
                        <p className="text-teal-400 font-semibold">Independent | 2021 - Present</p>
                        <p className="mt-3 text-gray-400">Successfully designed, developed, and deployed over 15 professional websites for a variety of clients. My work focuses on creating responsive, high-performance sites using modern web technologies.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;