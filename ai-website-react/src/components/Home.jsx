import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';

const Home = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: ["Frontend Developer", "React Developer", "MERN Stack Developer"],
            typeSpeed: 70,
            backSpeed: 40,
            loop: true,
            cursorChar: '|',
        };

        const typed = new Typed(typedRef.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-75"></div>
            <div className="container mx-auto px-6 relative z-10">
                <p className="text-2xl sm:text-3xl text-white mb-4">Hi, I'm Md Mostakim Hosen 👋</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                    <span className="text-teal-400" ref={typedRef}></span>
                </h1>
                <Link to="/contact" className="mt-10 inline-block bg-teal-500 text-white font-bold py-4 px-8 rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:scale-105">
                    Let's Connect <i className="fas fa-arrow-right ml-2"></i>
                </Link>
            </div>
        </section>
    );
};

export default Home;