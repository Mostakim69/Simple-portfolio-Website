import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900/80 backdrop-blur-md shadow-lg fixed w-full top-0 z-20">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-white">
                    <img src="https://i.postimg.cc/59sj5TB3/49b8e3e3-be9-4e57-9950-a8ff5aed1a0e-removebg-preview.png" alt="Logo" className="h-12" />
                </Link>
                <div className="hidden md:flex space-x-8">
                    <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</Link>
                    <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">About</Link>
                    <Link to="/experience" className="text-gray-300 hover:text-white transition-colors duration-300">Experience</Link>
                    <Link to="/education" className="text-gray-300 hover:text-white transition-colors duration-300">Education</Link>
                    <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</Link>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-gray-900/80 backdrop-blur-md">
                    <Link to="/" className="block py-3 px-6 text-sm text-gray-300 hover:bg-gray-800 transition-colors duration-300" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" className="block py-3 px-6 text-sm text-gray-300 hover:bg-gray-800 transition-colors duration-300" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/experience" className="block py-3 px-6 text-sm text-gray-300 hover:bg-gray-800 transition-colors duration-300" onClick={() => setIsOpen(false)}>Experience</Link>
                    <Link to="/education" className="block py-3 px-6 text-sm text-gray-300 hover:bg-gray-800 transition-colors duration-300" onClick={() => setIsOpen(false)}>Education</Link>
                    <Link to="/contact" className="block py-3 px-6 text-sm text-gray-300 hover:bg-gray-800 transition-colors duration-300" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;