import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import "github-markdown-css/github-markdown.css"; // For styling markdown

const MarkdownViewer = ({ githubLink }) => {
    const [markdown, setMarkdown] = useState(""); // To store the fetched markdown content
    const [error, setError] = useState(""); // To store any error message
    const [leftWidth, setLeftWidth] = useState(50); // State for controlling the width of the left container (raw markdown)

    // Fetch markdown file when the component is mounted
    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                // Example API call to fetch markdown content
                const response = await axios.post(`http://localhost:5000/api/get-markdown`);
                setMarkdown(response.data); // Store the raw markdown content
            } catch (err) {
                setError("Failed to fetch the README file.");
            }
        };

        fetchMarkdown();
    }, []); // Empty dependency array to run only once

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <>
            <div className=" h-[100vh] flex  gap-4 text-white bg-gray-900">
                {/* Left div for raw markdown with dynamic width */}
                <div className="border p-4" style={{ width: `${leftWidth}%` }}>
                    <h3 className="font-semibold mb-2">Raw Markdown</h3>
                    <pre className="whitespace-pre-wrap break-words">{markdown}</pre>
                </div>

                {/* Right div for rendered markdown */}
                <div className="markdown-body border p-4" style={{ width: `${100 - leftWidth}%` }}>
                    <h3 className="font-semibold mb-2">Rendered Markdown</h3>
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                </div>
            </div>

            {/* Slider for adjusting the width of the left container */}
            <div className="fixed w-[20%] mx-auto bottom-0 left-0 right-0 bg-gray-800 p-4">
                <label htmlFor="widthSlider" className="text-white mr-2">Adjust Raw Markdown Width:</label>
                <input
                    type="range"
                    id="widthSlider"
                    min="10"
                    max="90"
                    value={leftWidth}
                    onChange={(e) => setLeftWidth(e.target.value)}
                    className="w-full"
                />
            </div>
        </>
    );
};

export default MarkdownViewer;
