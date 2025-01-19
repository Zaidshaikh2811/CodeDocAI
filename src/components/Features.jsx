const featuresCard = [
    {
        logo: "🔥", // Placeholder emoji for logo
        heading: "Instant Code Analysis",
        description: "Advanced AI analyzes your codebase and generates detailed documentation in seconds.",
    },
    {
        logo: "📄",
        heading: "Markdown Format",
        description: "Clean and structured documentation in GitHub-compatible markdown format.",
    },
    {
        logo: "🎨",
        heading: "Custom Templates",
        description: "Choose from various documentation templates or create your own style.",
    },
    {
        logo: "🔗",
        heading: "One-Click Integration",
        description: "Seamlessly integrate with GitHub repositories with just one click.",
    },
    {
        logo: "🔄",
        heading: "Auto-Updates",
        description: "Documentation automatically updates when your code changes.",
    },
    {
        logo: "⚙️",
        heading: "Customizable Output",
        description: "Adjust documentation depth and format to match your needs.",
    },
];

const Features = () => {
    return (
        <div className="bg-gray-100 py-12 px-6">
            {/* Title Section */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Features</h1>
                <p className="text-lg text-gray-600">
                    Transform your GitHub code into well-structured documentation
                </p>
            </div>

            {/* Features Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {featuresCard.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
                    >
                        {/* Logo */}
                        <div className="text-4xl text-blue-500 mb-4">{feature.logo}</div>

                        {/* Heading */}
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            {feature.heading}
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
