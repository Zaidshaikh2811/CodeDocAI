import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown.css";

const MarkdownViewer = ({ githubLink }) => {
    const [markdown, setMarkdown] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchMarkdown = async () => {
            setLoading(true);
            setError("");
            try {
                const response = await axios.post("YOUR_API_ENDPOINT", { link: githubLink });
                setMarkdown(response.data); // Assuming API returns raw markdown
            } catch (err) {
                setError("Failed to fetch the Markdown file.");
            } finally {
                setLoading(false);
            }
        };

        fetchMarkdown();
    }, [githubLink]);

    if (loading) return <div className="text-center mt-4">Loading...</div>;
    if (error) return <div className="text-center mt-4 text-red-500">{error}</div>;

    return (
        <div className="markdown-body bg-white p-6 shadow rounded w-full mt-6">
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownViewer;
