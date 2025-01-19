import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const History = () => {
    const [githubLink, setGithubLink] = useState("");
    const [markdownContent, setMarkdownContent] = useState(null);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        // Load history from local storage on mount
        const savedHistory = JSON.parse(localStorage.getItem("markdownHistory")) || [];
        setHistory(savedHistory);
    }, []);

    const handleFetchMarkdown = async () => {
        if (!githubLink) {
            alert("Please enter a GitHub repository link!");
            return;
        }

        try {
            const repoPath = githubLink.replace("https://github.com/", "");
            const url = `https://raw.githubusercontent.com/${repoPath}/main/README.md`;

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Failed to fetch the README.md file. Check the repository link.");
            }

            const data = await response.text();
            setMarkdownContent(data);

            // Save to history
            const newHistory = [{ githubLink, markdownContent: data }, ...history];
            setHistory(newHistory);
            localStorage.setItem("markdownHistory", JSON.stringify(newHistory));
        } catch (error) {
            alert(error.message);
        }
    };

    const handleHistoryClick = (markdown) => {
        setMarkdownContent(markdown);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold text-blue-500 mb-6">Markdown History Viewer</h1>
                <p className="text-gray-600 mb-4">
                    Enter a GitHub repository link to fetch its <code>README.md</code> file or view your previously fetched markdown files below.
                </p>

                {/* Input Section */}
                <div className="flex gap-4 mb-6">
                    <input
                        type="text"
                        value={githubLink}
                        onChange={(e) => setGithubLink(e.target.value)}
                        placeholder="e.g., https://github.com/facebook/react"
                        className="flex-1 border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                        onClick={handleFetchMarkdown}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                    >
                        Fetch
                    </button>
                </div>

                {/* Markdown Content Viewer */}
                {/* {markdownContent && (
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Markdown Preview:</h2>
                        <div className="prose max-w-none bg-gray-50 p-4 rounded-lg shadow-inner">
                            <ReactMarkdown>{markdownContent}</ReactMarkdown>
                        </div>
                    </div>
                )} */}

                {/* History Section */}
                {history.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Previously Viewed Markdown Files:</h2>
                        <ul className="space-y-4">
                            {history.map((item, index) => (
                                <li
                                    key={index}
                                    className="bg-gray-50 border border-gray-300 rounded-lg shadow-sm p-4 cursor-pointer hover:bg-gray-100 transition"
                                    onClick={() => handleHistoryClick(item.markdownContent)}
                                >
                                    <p className="text-blue-500 font-medium truncate">{item.githubLink}</p>
                                    <p className="text-sm text-gray-500">
                                        Click to view the markdown content.
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default History;
