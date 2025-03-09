import React from "react";
import Head from "next/head";  // Import Head for injecting the script tag

import FamilyTreeComp from "../components/FamilyTreeComp";

export default function FamilyTreePage() {
    return (
        <>
            <Head>
                {/* Include the local script file */}
                <script src="/js/family-tree-library.js" />
            </Head>
            <div className="page-container">
                <h1 className="page-title">Trần Vĩnh Family Tree</h1>
                <FamilyTreeComp />
            </div>
        </>
    );
}