"use client";

import React from "react";

// Intro
const introData = {
  vietnamese: [
    "Tri thức chi lực,",
    "Truyền thừa chi đạo.",
    "Tổ đức di phong,",
    "Bất hủ chi bảo.",
    "Thiên cổ bất diệt."
  ],
  classicalChinese: [
    "知識之力，",
    "傳承之道。",
    "祖德遺風，",
    "不朽之寶。",
    "千古不滅。"
  ],
};

export default function IntroComponent() {
  return (
    <div className="intro-container">
      <h2 className="intro-title"></h2>

      <div className="intro-columns">
        <div className="intro-section">
          <pre style={{ fontSize: "0.8rem", lineHeight: "1.8", textAlign: "center" }}>
            {introData.vietnamese.join("\n")}
          </pre>
        </div>

        {/* <div className="intro-section">
          <pre style={{ fontSize: "1.2rem", lineHeight: "1.8", textAlign: "center" }}>
            {introData.classicalChinese.join("\n")}
          </pre>
        </div> */}
      </div>
    </div>
  );
}