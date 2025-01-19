import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-8">
            <div className="container mx-auto px-6 lg:px-16">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    {/* Logo or Branding */}
                    <div className="mb-6 lg:mb-0">
                        <h1 className="text-xl font-bold text-blue-500">CodeDocAI</h1>
                        <p className="text-gray-400 text-sm mt-2">
                            Transform your GitHub code into beautiful documentation effortlessly.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap gap-6 justify-center lg:justify-end">
                        <a href="/" className="text-gray-300 hover:text-blue-500 transition">
                            Home
                        </a>
                        <a href="/features" className="text-gray-300 hover:text-blue-500 transition">
                            Features
                        </a>
                        <a href="/how-it-works" className="text-gray-300 hover:text-blue-500 transition">
                            How It Works
                        </a>
                        <a href="/contact" className="text-gray-300 hover:text-blue-500 transition">
                            Contact
                        </a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 border-t border-gray-700 pt-6">
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        {/* Social Media Links */}
                        <div className="flex gap-4">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-blue-500 transition"
                            >
                                <i className="fab fa-twitter"></i> Twitter
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-blue-500 transition"
                            >
                                <i className="fab fa-github"></i> GitHub
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-blue-500 transition"
                            >
                                <i className="fab fa-linkedin"></i> LinkedIn
                            </a>
                        </div>

                        {/* Copyright */}
                        <div className="text-gray-500 text-sm mt-4 lg:mt-0">
                            © {new Date().getFullYear()} CodeDocAI. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
