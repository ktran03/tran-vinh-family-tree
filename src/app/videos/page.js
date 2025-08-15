"use client";

import React from "react";
import Header from "../components/Header";
import { useLanguage } from "../contexts/LanguageContext";

export default function VideosPage() {
    const { t } = useLanguage();
    return (
        <>
            <Header />
            <div className="page-container">
                <div style={{
                    background: "var(--ivory)",
                    padding: "40px",
                    borderRadius: "12px",
                    margin: "40px auto",
                    maxWidth: "1000px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    border: "1px solid var(--golden-yellow)",
                    borderTop: "4px solid var(--imperial-red)"
                }}>
                    <h1 style={{
                        textAlign: "center",
                        color: "var(--imperial-red)",
                        fontFamily: "Crimson Text, serif",
                        fontSize: "32px",
                        fontWeight: "600",
                        marginBottom: "30px",
                        paddingBottom: "15px",
                        borderBottom: "2px solid var(--golden-yellow)"
                    }}>
{t('videoTitle')}
                    </h1>
                    
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "20px"
                    }}>
                        <div style={{
                            position: "relative",
                            width: "100%",
                            maxWidth: "800px",
                            paddingBottom: "45%", // 16:9 aspect ratio
                            height: 0,
                            overflow: "hidden",
                            borderRadius: "8px",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
                        }}>
                            <iframe
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    border: "none"
                                }}
                                src="https://www.youtube.com/embed/6NAwDMtAtxw?autoplay=0&rel=0&modestbranding=1"
                                title="Family Heritage Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    </div>
                    
                    <div style={{
                        textAlign: "center",
                        color: "var(--charcoal)",
                        fontFamily: "Noto Serif, serif",
                        fontSize: "16px",
                        lineHeight: "1.6",
                        marginTop: "20px"
                    }}>
                        <p style={{ marginBottom: "20px", fontWeight: "500" }}>
                            {t('videoDescription')}
                        </p>
                        
                        <div style={{
                            background: "var(--pearl-white)",
                            padding: "20px",
                            borderRadius: "8px",
                            border: "1px solid var(--golden-yellow)",
                            borderLeft: "4px solid var(--jade-green)",
                            margin: "20px 0"
                        }}>
                            <p style={{ 
                                fontStyle: "italic", 
                                color: "var(--midnight-blue)", 
                                fontSize: "18px",
                                marginBottom: "10px" 
                            }}>
                                "魚洞平明市，東海少霜風"
                            </p>
                            <p style={{ 
                                color: "var(--warm-gray)", 
                                fontSize: "14px" 
                            }}>
                                - Opening lines of Hoài Niệm Gia Tổ
                            </p>
                        </div>
                        
                        <p>
                            {t('videoHonor')}
                        </p>
                        
                        <p style={{ 
                            fontStyle: "italic", 
                            color: "var(--imperial-red)",
                            marginTop: "25px",
                            fontSize: "17px"
                        }}>
                            {t('videoQuoteVi')} <br/>
                            <span style={{ fontSize: "14px", color: "var(--midnight-blue)" }}>
                                {t('videoQuoteEn')}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}