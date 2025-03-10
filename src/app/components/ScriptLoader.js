"use client";
import { useEffect } from "react";

const ScriptLoader = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/tran-vinh-family-tree/js/familytree.js"; // Point to the local file
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return null; // This component doesn't render anything
};

export default ScriptLoader;