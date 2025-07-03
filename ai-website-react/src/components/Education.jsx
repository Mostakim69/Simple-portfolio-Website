import React from 'react';

const Education = () => {
    return (
        <section id="education" className="py-24 bg-gray-800/50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    <i className="fas fa-graduation-cap mr-3"></i>Education
                </h2>
                <div className="flex flex-wrap justify-center -mx-4">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="bg-gray-900/70 p-8 rounded-lg shadow-2xl h-full transform hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-2xl font-bold text-white">SSC (Science)</h3>
                            <p className="text-teal-400 font-semibold mt-1">Mohiskundi High School</p>
                            <p className="mt-4 text-gray-400">Achieved GPA 5.00 out of 5.00.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="bg-gray-900/70 p-8 rounded-lg shadow-2xl h-full transform hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-2xl font-bold text-white">Diploma in Engineering, Computer Technology</h3>
                            <p className="text-teal-400 font-semibold mt-1">Rajshahi Polytechnic Institute</p>
                            <p className="mt-4 text-gray-400">Achieved a CGPA of 3.57 out of 4.00. Gained a strong foundation in computer science principles, programming, and web development.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;