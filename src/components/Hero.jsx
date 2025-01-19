
const Hero = () => {
    return (
        <section className="relative w-[100vw] bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen flex items-center justify-center px-6">
            <div className=" mx-auto flex flex-col lg:flex-row items-center gap-8">
                {/* Left Section */}
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Transform Your GitHub Code into <br />
                        <span className="text-blue-500">Beautiful Documentation</span>
                    </h1>
                    <p className="text-gray-300 mt-6 max-w-lg mx-auto lg:mx-0">
                        Paste your GitHub repository link and let our AI generate detailed and well-structured documentation in markdown format. Save time and focus on coding!
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button className="bg-blue-600 px-6 py-3 text-white rounded-lg shadow-lg hover:bg-blue-700">
                            Try Now - It's Free
                        </button>
                        <button className="bg-gray-800 px-6 py-3 text-white rounded-lg shadow-lg hover:bg-gray-700">
                            Watch Demo
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="relative bg-gray-800 rounded-lg shadow-lg max-w-sm w-full p-6 lg:p-8">
                    <form>
                        <label htmlFor="githubLink" className="block text-sm font-medium text-gray-400 mb-2">
                            Enter Your GitHub Link
                        </label>
                        <input
                            type="text"
                            id="githubLink"
                            placeholder="https://github.com/username/repo"
                            className="w-full px-4 py-2 rounded-lg bg-gray-900 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="w-full mt-4 bg-blue-600 px-4 py-2 text-white rounded-lg shadow hover:bg-blue-700"
                        >
                            Generate Documentation
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Hero;
