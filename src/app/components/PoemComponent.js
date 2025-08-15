"use client";

import React from "react";

// Poem data
const poemData = {
  han: [
    "魚洞平明市",
    "東海少霜風",
    "家鄉終懷抱",
    "五族向公同",
    "",
    "茅廬安園竹",
    "日日客滿從",
    "良醫兼慈母",
    "濟世是悟翁",
    "",
    "白慈留精華",
    "海上入心中",
    "病人已仰慕",
    "改祀一心衷",
    "",
    "修世醫仁義",
    "清白願終身",
    "貽孝忠為本",
    "教育自初生",
    "",
    "德鄉村保農",
    "開墾崇公田",
    "有弘心愛國",
    "獄中受苦刑",
    "",
    "誄䚵文留別",
    "只恨事不成",
    "勸問心熱血",
    "圢制度不公",
  ],
  vietnamese: [
    "Ngư Đông Bình Minh Thị",
    "Đông Hải Thiếu Sương Phong",
    "Gia Hương Chung Hoài Bão",
    "Ngũ Tộc Hướng Công Đồng",
    "",
    "Mão Lư An Viên Trúc",
    "Nhật Nhật Khách Mãn Tống",
    "Lương Y Kiêm Từ Mẫu",
    "Tế Thế Thị Ngộ Ông",
    "",
    "Bạch Từ Lưu Tinh Hoa",
    "Hải Thượng Nhập Tâm Trung",
    "Bệnh Nhân Đã Ngưỡng Mộ",
    "Cải Tự Nhất Tâm Trung",
    "",
    "Tu Thế Y Nhân Nghĩa",
    "Thanh Bạch Nguyện Chung Thân",
    "Di Hiếu Trung Vi Bổn",
    "Giáo Dục Từ Sơ Sinh",
    "",
    "Đức Hương Thôn Bảo Nông",
    "Khai Khẩn Sùng Công Điền",
    "Hữu Hoằng Tâm Ái Quốc",
    "Ngục Trung Thọ Khổ Hình",
    "",
    "Lụy Điệu Văn Lưu Biệt",
    "Chỉ Hận Sự Bất Thành",
    "Khuyến Vấn Tâm Nhiệt Huyết",
    "Thỉnh Chế Độ Bất Công",
  ],
  english: [
    "At dawn, fish fill the market,",
    "The Eastern Sea, cold winds blow.",
    "In my homeland, dreams endure,",
    "Five clans strive for unity.",
    "",
    "A thatched hut rests in bamboo shade,",
    "Each day, guests come and go.",
    "A healer’s hands, a mother’s heart,",
    "Brings wisdom, kindness, and care.",
    "",
    "Compassion shines like purest jade,",
    "The ocean’s waves touch the soul.",
    "The sick once longed for healing hands,",
    "Faith unwavering through time.",
    "",
    "To serve the world with skill and grace,",
    "To live with virtue, clear and true.",
    "Leave behind devotion and love,",
    "Teach the young from their first breath.",
    "",
    "Virtue and land guard the farmer’s toil,",
    "Clearing fields in honored way.",
    "A heart steadfast, love for the land,",
    "Even in prison, suffering stays.",
    "",
    "A eulogy for those who part,",
    "Regret that dreams fell short.",
    "Encourage questions, seek the truth,",
    "Demand justice where it’s lost.",
  ],
};

export default function PoemComponent() {
  return (
    <div className="poem-container">
      <h2 className="poem-title">Hoài Niệm Gia Tổ</h2>

      <div className="poem-columns">
        <div className="poem-section">
          <h3>Việt Ngữ</h3>
          <pre>{poemData.vietnamese.join("\n")}</pre>
        </div>

        <div className="poem-section">
          <h3>Hán Văn (Original)</h3>
          <pre>{poemData.han.join("\n")}</pre>
        </div>

        <div className="poem-section">
          <h3>English Translation</h3>
          <pre>{poemData.english.join("\n")}</pre>
        </div>
      </div>
      
      {/* Author Attribution */}
      <div style={{
        textAlign: "center",
        marginTop: "30px",
        padding: "15px",
        borderTop: "1px solid var(--golden-yellow)",
        color: "var(--warm-gray)",
        fontFamily: "Noto Serif, serif",
        fontSize: "14px",
        fontStyle: "italic"
      }}>
        <p style={{ margin: "0" }}>
          Cháu nội Trần Vĩnh Hoàng kính ghi
        </p>
        <p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "var(--midnight-blue)" }}>
          Respectfully recorded by grandson Trần Vĩnh Hoàng
        </p>
      </div>
    </div>
  );
}