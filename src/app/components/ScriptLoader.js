"use client";
import { useEffect } from "react";

const ScriptLoader = () => {
    useEffect(() => {
        const script = document.createElement("script");
        // Use the correct path based on environment
        const isProd = process.env.NODE_ENV === 'production';
        script.src = isProd ? '/tran-vinh-family-tree/js/familytree.js' : '/js/familytree.js';
        script.async = true;
        
        // Add error handling
        script.onerror = () => {
            console.error("Failed to load FamilyTreeJS script");
        };
        
        // Add load handling
        script.onload = () => {
            console.log("FamilyTreeJS script loaded successfully");
        };
        
        document.body.appendChild(script);
        
        // Cleanup function
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null; // This component doesn't render anything
};

export default ScriptLoader;