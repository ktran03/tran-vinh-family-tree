
"use client";

import Header from "./components/Header";
import Image from "next/image";
import { useLanguage } from "./contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  // Force GitHub Pages refresh
  
  // Helper function to get the correct image path
  const getImagePath = (imageName) => {
    const isProd = process.env.NODE_ENV === 'production';
    const isCustomDomain = process.env.NEXT_PUBLIC_CUSTOM_DOMAIN === 'true';
    const basePath = (isProd && !isCustomDomain) ? '/tran-vinh-family-tree' : '';
    return `${basePath}/images/${imageName}`;
  };
  
  return (
    <>
      <Header />
      <main>
        {/* Main Title */}
        <h1 className="tree-title" style={{ fontSize: "3rem", lineHeight: "1.5", textAlign: "center" }}>
          {t('mainTitle')}
        </h1>
        <h2 style={{ fontSize: "2rem", lineHeight: "1.4", textAlign: "center", margin: "1rem 0", fontWeight: "300", color: "#666" }}>
          {t('mainSubtitle')}
        </h2>
        
        {/* Enhanced Main Image */}
        <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
          <Image
            src={getImagePath("enhanced_main.jpeg")}
            alt="Tran Vinh Family Heritage"
            width={800}
            height={600}
            style={{ 
              maxWidth: "100%", 
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
            }}
            priority
          />
        </div>
      </main>
    </>
  );
}
