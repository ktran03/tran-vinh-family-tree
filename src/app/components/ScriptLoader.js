"use client";
import { useEffect } from "react";

const ScriptLoader = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://balkan.app/js/familytree.js"; // Use local file if needed
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return null; // This component doesn't render anything
};

export default ScriptLoader;