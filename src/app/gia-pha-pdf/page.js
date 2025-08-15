"use client";

import React from "react";
import Header from "../components/Header";
import { useLanguage } from "../contexts/LanguageContext";

export default function GiaPhaPage() {
    const { t } = useLanguage();
    return (
        <>
            <Header />
            <div className="page-container">
                <div style={{
                    background: "var(--ivory)",
                    padding: "60px 40px",
                    borderRadius: "12px",
                    margin: "40px auto",
                    maxWidth: "900px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    border: "1px solid var(--golden-yellow)",
                    borderTop: "4px solid var(--imperial-red)",
                    textAlign: "center"
                }}>
                    <h1 style={{
                        color: "var(--imperial-red)",
                        fontFamily: "Crimson Text, serif",
                        fontSize: "36px",
                        fontWeight: "600",
                        marginBottom: "20px",
                        letterSpacing: "1px"
                    }}>
{t('giaPhaPdfTitle')}
                    </h1>
                    
                    <h2 style={{
                        color: "var(--midnight-blue)",
                        fontFamily: "Noto Serif, serif",
                        fontSize: "24px",
                        fontWeight: "400",
                        marginBottom: "40px",
                        letterSpacing: "0.5px"
                    }}>
{t('giaPhaPdfSubtitle')}
                    </h2>

                    {/* Traditional Chinese/Vietnamese Book Icon */}
                    <div style={{
                        fontSize: "80px",
                        color: "var(--golden-yellow)",
                        marginBottom: "30px",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.1)"
                    }}>
                        📜
                    </div>

                    <div style={{
                        background: "var(--pearl-white)",
                        padding: "30px",
                        borderRadius: "8px",
                        border: "1px solid var(--golden-yellow)",
                        borderLeft: "4px solid var(--jade-green)",
                        margin: "30px 0",
                        textAlign: "left"
                    }}>
                        <h3 style={{
                            color: "var(--imperial-red)",
                            fontFamily: "Crimson Text, serif",
                            fontSize: "22px",
                            fontWeight: "600",
                            marginBottom: "20px",
                            textAlign: "center"
                        }}>
{t('sacredRecord')}
                        </h3>
                        
                        <p style={{
                            color: "var(--charcoal)",
                            fontFamily: "Noto Serif, serif",
                            fontSize: "16px",
                            lineHeight: "1.8",
                            marginBottom: "15px"
                        }}>
{t('giaPhaPdfDescription')}
                        </p>
                        
                        <ul style={{
                            color: "var(--charcoal)",
                            fontFamily: "Noto Serif, serif",
                            fontSize: "15px",
                            lineHeight: "1.7",
                            paddingLeft: "20px",
                            listStyle: "none"
                        }}>
                            {t('giaPhaPdfItems').map((item, index) => (
                                <li key={index} style={{ marginBottom: "10px" }}>
                                    <span style={{ color: "var(--golden-yellow)", fontWeight: "bold" }}>•</span> 
                                    &nbsp; {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div style={{
                        padding: "25px",
                        background: "linear-gradient(135deg, var(--golden-yellow), var(--gold-accent))",
                        borderRadius: "8px",
                        margin: "30px 0",
                        color: "var(--imperial-red)"
                    }}>
                        <h3 style={{
                            fontFamily: "Crimson Text, serif",
                            fontSize: "24px",
                            fontWeight: "600",
                            marginBottom: "15px"
                        }}>
                            {t('comingSoonChinese')}
                        </h3>
                        <p style={{
                            fontFamily: "Noto Serif, serif",
                            fontSize: "18px",
                            fontWeight: "500",
                            marginBottom: "5px"
                        }}>
                            {t('comingSoonEnglish')}
                        </p>
                        <p style={{
                            fontFamily: "Noto Serif, serif",
                            fontSize: "14px",
                            fontWeight: "400",
                            opacity: "0.8"
                        }}>
                            {t('comingSoonSubtext')}
                        </p>
                    </div>

                    <p style={{
                        color: "var(--midnight-blue)",
                        fontFamily: "Noto Serif, serif",
                        fontSize: "16px",
                        lineHeight: "1.6",
                        fontStyle: "italic",
                        marginTop: "30px"
                    }}>
                        {t('giaPhaPdfQuoteVi')} <br />
                        <span style={{ fontSize: "14px", color: "var(--warm-gray)" }}>
                            {t('giaPhaPdfQuoteEn')}
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
}