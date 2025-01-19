const workingInfo = [
    {
        logo: "🔗", // Placeholder emoji for logo
        heading: "Paste GitHub Link",
        description: "Simply paste your GitHub repository URL into CodeDocAi.",
    },
    {
        logo: "⚡",
        heading: "Instant Code Analysis",
        description: "Advanced AI analyzes your codebase and generates detailed documentation in seconds.",
    },
    {
        logo: "📄",
        heading: "Download Documentation",
        description: "Get structured documentation in GitHub-compatible Markdown format instantly.",
    },
];

const Working = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 px-6">
            {/* Title Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-white mb-4">
                    How It Works
                </h1>
                <p className="text-lg text-gray-300">
                    Three Simple Steps to Perfect Documentation
                </p>
            </div>

            {/* Working Steps */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto">
                {workingInfo.map((info, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 border border-gray-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition duration-300 w-full md:w-1/3"
                    >
                        {/* Logo */}
                        <div className="text-5xl text-blue-500 mb-4">{info.logo}</div>

                        {/* Heading */}
                        <h2 className="text-2xl font-semibold text-white mb-2">
                            {info.heading}
                        </h2>

                        {/* Description */}
                        <p className="text-gray-400">{info.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Working;
