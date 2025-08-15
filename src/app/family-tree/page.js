"use client";

import React from "react";
import Script from "next/script";
import FamilyTreeComp from "../components/FamilyTreeComp";
import Header from "../components/Header";
import { useLanguage } from "../contexts/LanguageContext";

export default function FamilyTreePage() {
    const isProd = process.env.NODE_ENV === 'production';
    const { t } = useLanguage();
    
    return (
        <>
            {/* Load the script with proper strategy */}
            <Script 
                src={isProd ? '/tran-vinh-family-tree/js/familytree.js' : '/js/familytree.js'}
                strategy="beforeInteractive"
                onLoad={() => {
                    console.log('✅ FamilyTreeJS loaded successfully');
                    if (window.FamilyTree) {
                        console.log('✅ FamilyTree object available in window');
                    } else {
                        console.error('❌ FamilyTree object not found after loading');
                    }
                }}
                onError={(e) => {
                    console.error('❌ Failed to load FamilyTreeJS script:', e);
                }}
            />

            <Header />
            <div style={{ 
                width: "100vw", 
                height: "calc(100vh - 80px)", 
                marginTop: "80px",
                overflow: "hidden" 
            }} className="family-tree-container">
                <div style={{ 
                    padding: "15px 10px 10px 10px", 
                    textAlign: "center", 
                    background: "var(--ivory)",
                    borderBottom: "2px solid var(--golden-yellow)"
                }}>
                    <h1 style={{ 
                        margin: 0, 
                        color: "var(--imperial-red)", 
                        fontFamily: "Crimson Text, serif",
                        fontSize: "1.8rem",
                        fontWeight: "600"
                    }}>
                        {t('familyTreeTitle')}
                    </h1>
                </div>
                <FamilyTreeComp />
            </div>
        </>
    );
}