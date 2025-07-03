import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900/80 py-8">
            <div className="container mx-auto px-6 text-center text-gray-500">
                <div className="flex justify-center space-x-8 mb-6">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 text-2xl"><i className="fab fa-twitter"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 text-2xl"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 text-2xl"><i className="fab fa-github"></i></a>
                </div>
                <p>&copy; 2025 Md Mostakim Hosen. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;