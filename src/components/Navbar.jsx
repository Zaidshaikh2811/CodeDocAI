import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-xl font-bold tracking-wide">
                    <a href="/" className="text-blue-500 hover:text-blue-400">
                        CodeDocAI
                    </a>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-8">
                    <a href="#features" className="text-gray-300 hover:text-white">
                        Features
                    </a>
                    <a href="#how-it-works" className="text-gray-300 hover:text-white">
                        How It Works
                    </a>
                    <a href="#pricing" className="text-gray-300 hover:text-white">
                        Pricing
                    </a>
                    <a href="#demo" className="text-gray-300 hover:text-white">
                        Demo
                    </a>
                    <a href="#contact" className="text-gray-300 hover:text-white">
                        Contact
                    </a>
                </div>

                {/* CTA Buttons */}
                <div className="hidden md:flex space-x-4">
                    <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
                        Try Now
                    </button>
                    <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                        Login
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="text-gray-300 hover:text-white focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
