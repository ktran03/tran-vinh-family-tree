"use client";

import React from "react";
// import Script from "next/script"; // Import Next.js Script
import FamilyTreeComp from "../components/FamilyTreeComp";
import Head from "next/head";

export default function FamilyTreePage() {
    return (
        <>
            {/* Load the script asynchronously */}
            <Head>
                {/* Use absolute path for GitHub Pages */}
                <script src="/tran-vinh-family-tree/js/familytree.js" defer></script>
                            </Head>

            <div className="page-container">
                <h1 className="page-title">Trần Vĩnh Family Tree</h1>
                <FamilyTreeComp />
            </div>
        </>
    );
}