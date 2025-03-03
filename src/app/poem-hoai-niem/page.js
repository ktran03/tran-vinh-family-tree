"use client";
import React from "react";
import Link from "next/link";

const PoemHoaiNiem = () => {
    return (
        <div className="poem-container">
            {/* Title Section */}
            <h1>Hoài Niệm Gia Tổ</h1>
            <h2>(Remembrance of Family Ancestors)</h2>
            
            {/* Introduction */}
            <p>
                This poem, <strong>“Hoài Niệm Gia Tổ”</strong> (Remembrance of Family Ancestors), was written by <strong>Trần Vĩnh Cảnh</strong>, your great-great-grandfather. 
                It reflects themes of <strong>ancestral remembrance, familial duty, and Confucian values</strong>. Through rich imagery, 
                the poem expresses nostalgia for the homeland, devotion to family, and a deep philosophical perspective on life and legacy.
            </p>
            <h1 style={{ fontSize: "2rem" }}>📜 Original Poem in Han Văn</h1>

<p style={{ fontSize: "2.5rem", lineHeight: "1.5" }}>
    魚洞平明市<br />
    東海少霜風<br />
    家鄉終懷抱<br />
    五族向公同<br /><br />

    茅廬安園竹<br />
    日日客滿從<br />
    良醫兼慈母<br />
    濟世是悟翁<br /><br />

    白慈留精華<br />
    海上入心中<br />
    病人已仰慕<br />
    改祀一心衷<br /><br />

    修世醫仁義<br />
    清白願終身<br />
    貽孝忠為本<br />
    教育自初生<br /><br />

    德鄉村保農<br />
    開墾崇公田<br />
    有弘心愛國<br />
    獄中受苦刑<br /><br />

    誄䚵文留別<br />
    只恨事不成<br />
    勸問心熱血<br />
    圢制度不公<br /><br />
</p>


            {/* Original Poem (Chinese Characters) */}
            <h3>📜 Poem translating each word</h3>
            <pre>
1.	Ngư (魚) – Cá <br />
2.	Đông (洞) – Hang động, vùng nước sâu, nơi hội tụ <br />
3.	Bình minh (平明) – Buổi sáng sớm, rạng đông <br />
4.	Thị (市) – Chợ <br />

5.	Đông hải (東海) – Biển Đông <br />
6.	Thiếu (少) – Ít, thiếu hụt <br />
7.	Sương (霜) – Sương mù, sương giá <br />
8.	Phong (風) – Gió <br />

9.	Gia hương (家鄉) – Quê hương <br />
10.	Chung (終) – Cùng nhau, trọn vẹn, hoặc kết thúc <br />
11. 	Hoài bão (懷抱) – Hoài bão, ước vọng, ôm ấp một ý chí lớn <br />

12.	Ngũ (五) – Năm (số 5) <br />
13.	Tộc (族) – Dòng tộc, bộ tộc, gia tộc <br />
14.	Hướng (向) – Hướng đến, đi về phía <br />
15.	Công đồng (公同) – Lợi ích chung, đoàn kết vì cộng đồng <br />

16.	Mão (茅) – Lều tranh, nhà tranh, cỏ tranh <br />
17.	Lư (廬) – Nhà tranh, lều cỏ, nhà lợp lá <br />
18.	An (安) – Bình yên, ổn định <br />
19.	Viên (園) – Vườn, khuôn viên <br />
20.	Trúc (竹) – Cây tre <br />

21.	Nhật nhật (日日) – Ngày qua ngày, mỗi ngày <br />
22.	Khách (客) – Khách, người đến thăm <br />
23.	Mãn (滿) – Đầy, tràn ngập <br />
24.	Tống (從) – Đi theo, tuân theo, đồng hành <br />

25.	Lương y (良醫) – Thầy thuốc giỏi, danh y <br />
26.	Kiêm (兼) – Kiêm nhiệm, đảm nhiệm nhiều vai trò <br />
27.	Từ mẫu (慈母) – Người mẹ hiền từ, nhân hậu <br />

28.	Tế thế (濟世) – Cứu giúp thiên hạ, giúp đời <br />
29.	Thị (是) – Là, chính là <br />
30.	Ngộ (悟) – Giác ngộ, nhận ra chân lý <br />
31.	Ông (翁) – Ông lão, bậc trưởng thượng, người cao tuổi đáng kính <br />

32.	Bạch (白) – Trắng, tinh khiết <br />
33.	Từ (慈) – Nhân từ, hiền từ <br />
34.	Lưu (留) – Lưu giữ, gìn giữ <br />
35.	Tinh hoa (精華) – Tinh túy, bản chất tinh hoa <br />

36.	Hải (海) – Biển, đại dương <br />
37.	Thượng (上) – Trên, phía trên <br />
38.	Nhập (入) – Đi vào, thấm vào <br />
39.	Tâm (心) – Trái tim, tâm hồn <br />
40.	Trung (中) – Bên trong, ở giữa <br />

41.	Bệnh nhân (病人) – Người bệnh, bệnh nhân <br />
42.	Đã (已) – Đã, từng làm gì đó <br />
43.	Ngưỡng mộ (仰慕) – Ngưỡng mộ, kính phục <br />

44.	Cải tự (改祀) – Thay đổi cách thờ cúng, cải cách tế lễ tổ tiên. <br />
45.	Nhất (一) – Một, duy nhất <br />
46.	Tâm (心) – Tâm trí, lòng dạ <br />
47.	Trung (衷) – Chân thành, lòng trung kiên <br />

48.	Tu (修) – Tu dưỡng, rèn luyện, trau dồi <br />
49.	Thế (世) – Thế giới, đời, thế hệ <br />
50.	Y (醫) – Y học, chữa bệnh <br />
51.	Nhân (仁) – Nhân từ, lòng tốt <br />
52.	Nghĩa (義) – Chính nghĩa, lẽ phải, đạo nghĩa <br />

53.	Thanh bạch (清白) – Trong sạch, thanh khiết, liêm khiết <br />
54.	Nguyện (願) – Nguyện vọng, ước nguyện <br />
55.	Chung thân (終身) – Suốt đời, đến hết cuộc đời <br />

56.	Di (貽) – Truyền lại, để lại, ban tặng <br />
57.	Hiếu (孝) – Lòng hiếu thảo, kính trọng cha mẹ <br />
58.	Trung (忠) – Trung thành, tận tâm <br />
59.	Vi (為) – Làm, thực hiện <br />
60.	Bổn (本) – Gốc rễ, cốt lõi <br />

61.	Giáo dục (教育) – Giáo dục, dạy dỗ <br />
62.	Từ (自) – Từ, kể từ <br />
63.	Sơ sinh (初生) – Mới sinh, tuổi nhỏ <br />

64.	Đức (德) – Đạo đức, phẩm hạnh <br />
65.	Hương (鄉) – Quê hương, làng quê, vùng đất tổ tiên <br />
66.	Thôn (村) – Làng quê <br />
67.	Bảo (保) – Bảo vệ, giữ gìn <br />
68.	Nông (農) – Nông dân, nghề nông <br />

69.	Khai khẩn (開墾) – Khai hoang, khai khẩn đất <br />
70.	Sùng (崇) – Tôn kính, tôn sùng <br />
71.	Công (公) – Công cộng, chung <br />
72.	Điền (田) – Ruộng đồng, đất đai <br />

73.	Hữu hoằng (有弘) – Có chí lớn, mạnh mẽ <br />
74.	Tâm (心) – Trái tim, tấm lòng <br />
75.	Ái (愛) – Yêu thương, tình yêu <br />
76.	Quốc (國) – Quốc gia, đất nước <br />

77.	Ngục (獄) – Nhà tù, lao ngục <br />
78.	Trung (中) – Ở giữa, bên trong <br />
79.	Thọ (受) – Chịu đựng, nhận lấy <br />
80.	Khổ (苦) – Đau khổ, gian khổ <br />
81.	Hình (刑) – Hình phạt, trừng phạt <br />

82.	Lụy (誄) – Văn tế, điếu văn, lời tiễn biệt người đã khuất <br />
83.	Điệu (䚵) – Điệu tang, nghi thức tang lễ, lễ tế <br />
84.	Văn (文) – Văn chương, chữ nghĩa, tác phẩm viết <br />
85.	Lưu (留) – Lưu lại, bảo tồn, gìn giữ <br />
86.	Biệt (別) – Chia ly, tách rời, phân biệt <br />

87.	Chỉ (只) – Chỉ có, duy nhất, đơn thuần <br />
88.	Hận (恨) – Oán hận, tiếc nuối <br />
89.	Sự (事) – Sự việc, công việc, chuyện <br />
90.	Bất (不) – Không, chưa, phủ định <br />
91.	Thành (成) – Thành công, hoàn thành <br />

92.	Khuyến (勸) – Khuyên bảo, khuyến khích <br />
93.	Vấn (问) – Hỏi, thắc mắc, tìm hiểu <br />
94.	Tâm (心) – Tấm lòng, trái tim <br />
95.	Nhiệt (熱) – Nóng, nhiệt huyết, đam mê <br />
96.	Huyết (血) – Máu, nhiệt huyết, đam mê <br />

97.	(Đinh / Thỉnh / Tỉnh (圢) – Bờ đất, gò đất, vùng đất nhỏ <br />
98.	Chế độ (制度) – Chế độ, hệ thống, luật lệ <br />
99.	Bất (不) – Không, phủ định <br />
100.	Công (公) – Công bằng, chính nghĩa, chung <br />

            </pre>

            {/* Modern Vietnamese Interpretation (Poetic Format) */}
            <h3>📜 Modern Vietnamese Interpretation (Poetic Format)</h3>
            <blockquote>
                *“Cá hội tụ buổi rạng đông,<br />
                Biển trời sóng lặng gió không buồn.<br />
                Quê nhà hoài vọng ngàn thương nhớ,<br />
                Năm dòng tộc mãi kết đoàn chung.”*
            </blockquote>

            {/* Historical & Literary Analysis */}
            <h3>🔎 Analysis & Historical Context</h3>

            <h4>📌 Who Wrote This?</h4>
            <p>
                This poem was composed by <strong>Trần Vĩnh Cảnh</strong>, a well-respected figure in your lineage. 
                He lived from <strong>1861 - 1935</strong> and served as the **Trưởng Làng (village chief) of Cư Lai in 1904**.
                He was a devoted leader, a healer (lương y), and a man deeply rooted in Confucian traditions.
            </p>

            <h4>📜 What Does It Mean?</h4>
            <ul>
                <li>
                    The **first stanza** describes the **morning fish market** where people gather, reflecting the 
                    traditional economic life of the time.
                </li>
                <li>
                    The **second stanza** references the **East Sea (Biển Đông)**, symbolizing stability, 
                    but also acknowledges the uncertainty and hardships (Sương Phong - frost and wind).
                </li>
                <li>
                    The **third stanza** expresses **love for homeland and dreams for the future**, with 
                    a hope that family values and traditions endure.
                </li>
                <li>
                    The **fourth stanza** emphasizes **unity among the five family branches (Ngũ Tộc)**, 
                    highlighting the importance of kinship and communal harmony.
                </li>
            </ul>

            <h4>⚔️ Connection to Minh Hương History?</h4>
            <p>
                The poem’s themes align with the values of <strong>Minh Hương communities</strong>, 
                who were descendants of Ming loyalists who settled in Vietnam. 
                These communities strongly upheld Confucian ideals, education, and communal harmony.
            </p>
            <p>
                The mention of **“Ngũ Tộc”** (Five Clans) may hint at a larger social structure within 
                Minh Hương villages, where different family lineages cooperated for survival and prosperity.
            </p>

            {/* Family Legacy & Confucian Influence */}
            <h3>🏡 Family Legacy & Confucian Influence</h3>
            <p>
                <strong>Trần Vĩnh Cảnh</strong> was deeply influenced by Confucianism, which emphasized:
            </p>
            <ul>
                <li><strong>孝 (Hiếu) - Filial Piety:</strong> Respect and devotion to one’s ancestors.</li>
                <li><strong>忠 (Trung) - Loyalty:</strong> Commitment to family, village, and country.</li>
                <li><strong>義 (Nghĩa) - Righteousness:</strong> Upholding justice and moral integrity.</li>
            </ul>
            <p>
                His dedication to medicine (<strong>Lương Y</strong>) and his leadership role as **Trưởng Làng** 
                illustrate these Confucian ideals in practice.
            </p>

            {/* Conclusion */}
            <h3>✅ Conclusion</h3>
            <p>
                <strong>“Hoài Niệm Gia Tổ”</strong> serves as both a poetic reflection on family and an enduring 
                record of ancestral values. It reinforces the importance of remembering one's roots, 
                preserving traditions, and maintaining unity.
            </p>
            <p>
                Through its **rich literary style, deep philosophical meaning, and historical significance**, 
                this poem remains an essential part of your family's cultural heritage.
            </p>

            {/* Navigation Links */}
            <p>
                <Link href="/">⬅ Back to Home</Link>
            </p>
        </div>
    );
};

export default PoemHoaiNiem;