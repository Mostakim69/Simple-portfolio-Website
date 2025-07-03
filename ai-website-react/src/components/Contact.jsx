import React from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        // Simulate success/failure for demonstration
        const success = Math.random() > 0.5; // Randomly show success or error

        if (success) {
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'Your message has been sent successfully.',
                background: '#1a202c',
                color: '#a0aec0',
                confirmButtonColor: '#38b2ac'
            });
            event.target.reset();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to send message. Please try again later.',
                background: '#1a202c',
                color: '#a0aec0',
                confirmButtonColor: '#e53e3e'
            });
        }
    };

    return (
        <section id="contact" className="py-24">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    <i className="fas fa-paper-plane mr-3"></i>Get In Touch
                </h2>
                <div className="max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="bg-gray-800/50 p-8 rounded-lg shadow-2xl">
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                            <input type="text" id="name" name="name" className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-white transition-colors" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                            <input type="email" id="email" name="email" className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-white transition-colors" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                            <textarea id="message" name="message" rows="5" className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-white transition-colors"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-teal-500 text-white font-bold py-4 px-8 rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:scale-105">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;