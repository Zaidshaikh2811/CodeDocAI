import React from 'react';

const GetInTouch = () => {
    return (
        <div className="bg-white text-gray-900 py-16 px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Information Section */}
                <div>
                    <h1 className="text-4xl font-bold text-blue-500 mb-6">Get In Touch</h1>
                    <p className="text-gray-700 text-lg mb-6">
                        Have questions about CodeDocAI? We're here to help! Reach out to us through any of these channels.
                    </p>

                    <ul className="space-y-4 text-gray-700">
                        <li>
                            <span className="font-bold">Phone:</span> +1 (123) 456-7890
                        </li>
                        <li>
                            <span className="font-bold">Email:</span> support@example.com
                        </li>
                        <li>
                            <span className="font-bold">Address:</span> 123 CodeDoc Lane, AI City, US
                        </li>
                    </ul>
                </div>

                {/* Contact Form Section */}
                <div>
                    <form className="bg-gray-200 to-black text-white shadow-lg rounded-lg p-8 space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-md  font-medium text-gray-800 mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full py-2 px-4 border-gray-600 rounded-lg shadow-sm text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-md font-medium text-gray-800  mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border-gray-600 py-2 px-4 rounded-lg shadow-sm text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-md font-medium text-gray-800 mb-2"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full border-gray-600 py-2 px-4 rounded-lg shadow-sm text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Subject"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="description"
                                className="block  text-md font-medium text-gray-800 mb-2"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                rows="4"
                                className="w-full border-gray-600 py-2 px-4 rounded-lg shadow-sm text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;
