import { useState } from "react";
import MarkdownViewer from "../components/MarkdownViewer";
import Hero from "../components/Hero";

const LandingPage = () => {
    const [githubLink, setGithubLink] = useState("");
    const [submittedLink, setSubmittedLink] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (githubLink.trim()) {
            setSubmittedLink(githubLink);
        }
    };

    return (


        <Hero />

    );
};

export default LandingPage;
