"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const translations = {
    en: {
        // Navigation
        home: "Home",
        giaPhaPdf: "Gia Phả PDF",
        familyTree: "Family Tree",
        poems: "Poems",
        videos: "Videos",
        contribute: "Contribute",
        
        // Homepage
        mainTitle: "Gia Phả Họ Trần Vĩnh",
        mainSubtitle: "Tran Vinh Family Genealogy",
        
        // Family Tree Page
        familyTreeTitle: "Trần Vĩnh Family Tree",
        loadingTree: "Loading family tree...",
        treeLoadError: "FamilyTreeJS not loaded after maximum retries!",
        refreshPage: "Please refresh the page to try again.",
        
        // Poems Page
        poemMainTitle: "Hoài Niệm Gia Tổ - Ancestral Remembrance",
        poemDescription: "This sacred poem, composed by our ancestor Trần Vĩnh Cảnh, stands as the cornerstone of our family's Gia Phả (genealogy book). It embodies our deepest reverence and remembrance of those who came before us.",
        poemHonor: "Through this video presentation, we honor the literary legacy of our forebears and ensure that future generations understand the profound wisdom and devotion embedded in our ancestral poetry.",
        poemQuote: "The virtues of our ancestors are imperishable treasures",
        vietnamese: "Vietnamese",
        hanScript: "Hán Văn (Original)",
        englishTranslation: "English Translation",
        
        // Videos Page
        videoTitle: "Hoài Niệm Gia Tổ - Ancestral Remembrance",
        videoDescription: "This sacred poem, composed by our ancestor Trần Vĩnh Cảnh, stands as the cornerstone of our family's Gia Phả (genealogy book). It embodies our deepest reverence and remembrance of those who came before us.",
        videoHonor: "Through this video presentation, we honor the literary legacy of our forebears and ensure that future generations understand the profound wisdom and devotion embedded in our ancestral poetry.",
        videoQuoteVi: '"Tổ đức di phong, bất hủ chi bảo"',
        videoQuoteEn: "The virtues of our ancestors are imperishable treasures",
        
        // Gia Pha PDF Page
        giaPhaPdfTitle: "Gia Phả Họ Trần Vĩnh",
        giaPhaPdfSubtitle: "Trần Vĩnh Family Genealogy Record",
        sacredRecord: "Sacred Family Record",
        giaPhaPdfDescription: "The complete Gia Phả (家譜) contains the sacred genealogical records of our family, meticulously maintained through generations. This precious document includes:",
        giaPhaPdfItems: [
            "Ancestral lineage charts and family trees",
            "Sacred poems including \"Hoài Niệm Gia Tổ\"",
            "Historical records and biographical entries", 
            "Traditional calligraphy and original manuscripts",
            "Photographic documentation and family portraits"
        ],
        comingSoonChinese: "即將推出",
        comingSoonEnglish: "Coming Soon",
        comingSoonSubtext: "Complete digitized genealogy book",
        giaPhaPdfQuoteVi: '"知其所來，識其所去"',
        giaPhaPdfQuoteEn: "Know where we come from, understand where we are going",
        
        // Contribute Page
        contributeTitle: "Contribute to Our Family Heritage",
        contributeDescription: "Help us preserve and expand our family history! Your contributions help future generations understand their roots and honor our ancestors.",
        contributorInfo: "Your Information",
        yourName: "Your Name",
        email: "Email",
        relationToFamily: "Your Relation to the Trần Vĩnh Family",
        relationPlaceholder: "e.g., Great-grandchild of Trần Vĩnh Quang, Spouse of family member, etc.",
        contributionDetails: "Contribution Details",
        contributionType: "Type of Contribution",
        selectType: "Select contribution type...",
        contributionTypes: {
            newMember: "Add New Family Member",
            childSpouse: "Add Child or Spouse", 
            photos: "Submit Photos",
            biography: "Biography or Family Story",
            correction: "Correct Existing Information",
            document: "Historical Document/Record",
            other: "Other"
        },
        familyMemberName: "Family Member Name (if applicable)",
        familyMemberPlaceholder: "Name of the family member this relates to",
        detailedDescription: "Detailed Description",
        descriptionPlaceholder: "Please provide detailed information about your contribution...",
        additionalInfo: "Additional Information",
        additionalPlaceholder: "Any additional context, dates, locations, or notes...",
        submitNote: "Note: For photos or documents, please mention them in your description. After submitting this form, you'll be contacted via email with instructions on how to send your files securely.",
        submitButton: "Submit Contribution Request",
        submitting: "Preparing Request...",
        thankYou: "Thank you! Your contribution request has been prepared. Please send the email that just opened in your email client.",
        required: "*"
    },
    vi: {
        // Navigation
        home: "Trang Chủ",
        giaPhaPdf: "Gia Phả PDF",
        familyTree: "Cây Gia Đình",
        poems: "Thơ Văn",
        videos: "Video",
        contribute: "Đóng Góp",
        
        // Homepage
        mainTitle: "Gia Phả Họ Trần Vĩnh",
        mainSubtitle: "Gia Phả Gia Đình Trần Vĩnh",
        
        // Family Tree Page
        familyTreeTitle: "Cây Gia Đình Trần Vĩnh",
        loadingTree: "Đang tải cây gia đình...",
        treeLoadError: "Không thể tải FamilyTreeJS sau nhiều lần thử!",
        refreshPage: "Vui lòng tải lại trang để thử lại.",
        
        // Poems Page
        poemMainTitle: "Hoài Niệm Gia Tổ - Tưởng Nhớ Tổ Tiên",
        poemDescription: "Bài thơ thiêng liêng này, do tổ tiên Trần Vĩnh Cảnh sáng tác, là nền tảng của cuốn Gia Phả gia đình chúng ta. Nó thể hiện sự kính trọng và tưởng nhớ sâu sắc nhất đối với những người đi trước.",
        poemHonor: "Thông qua video này, chúng ta tôn vinh di sản văn học của tổ tiên và đảm bảo các thế hệ tương lai hiểu được trí tuệ sâu sắc và lòng thành kính trong thơ ca tổ tiên.",
        poemQuote: "Đức hạnh tổ tiên là báu vật bất diệt",
        vietnamese: "Tiếng Việt",
        hanScript: "Hán Văn (Gốc)",
        englishTranslation: "Dịch Tiếng Anh",
        
        // Videos Page
        videoTitle: "Hoài Niệm Gia Tổ - Tưởng Nhớ Tổ Tiên",
        videoDescription: "Bài thơ thiêng liêng này, do tổ tiên Trần Vĩnh Cảnh sáng tác, là nền tảng của cuốn Gia Phả gia đình chúng ta. Nó thể hiện sự kính trọng và tưởng nhớ sâu sắc nhất đối với những người đi trước.",
        videoHonor: "Thông qua video này, chúng ta tôn vinh di sản văn học của tổ tiên và đảm bảo các thế hệ tương lai hiểu được trí tuệ sâu sắc và lòng thành kính trong thơ ca tổ tiên.",
        videoQuoteVi: '"Tổ đức di phong, bất hủ chi bảo"',
        videoQuoteEn: "Đức hạnh tổ tiên là báu vật bất diệt",
        
        // Gia Pha PDF Page
        giaPhaPdfTitle: "Gia Phả Họ Trần Vĩnh", 
        giaPhaPdfSubtitle: "Hồ Sơ Gia Phả Gia Đình Trần Vĩnh",
        sacredRecord: "Hồ Sơ Gia Đình Thiêng Liêng",
        giaPhaPdfDescription: "Cuốn Gia Phả (家譜) hoàn chình chứa đựng những ghi chép gia phả thiêng liêng của gia đình chúng ta, được duy trì cẩn thận qua nhiều thế hệ. Tài liệu quý giá này bao gồm:",
        giaPhaPdfItems: [
            "Biểu đồ dòng dõi tổ tiên và cây gia đình",
            "Những bài thơ thiêng liêng bao gồm \"Hoài Niệm Gia Tổ\"",
            "Hồ sơ lịch sử và tiểu sử các thành viên",
            "Thư pháp truyền thống và bản thảo gốc", 
            "Tài liệu ảnh và chân dung gia đình"
        ],
        comingSoonChinese: "即將推出",
        comingSoonEnglish: "Sắp Ra Mắt",
        comingSoonSubtext: "Cuốn gia phả số hóa hoàn chỉnh",
        giaPhaPdfQuoteVi: '"知其所來，識其所去"',
        giaPhaPdfQuoteEn: "Biết nguồn gốc, hiểu đích đến",
        
        // Contribute Page
        contributeTitle: "Đóng Góp Cho Di Sản Gia Đình",
        contributeDescription: "Hãy giúp chúng ta bảo tồn và mở rộng lịch sử gia đình! Những đóng góp của bạn giúp các thế hệ tương lai hiểu về nguồn gốc và tôn vinh tổ tiên.",
        contributorInfo: "Thông Tin Của Bạn",
        yourName: "Tên Của Bạn",
        email: "Email",
        relationToFamily: "Mối Quan Hệ Của Bạn Với Gia Đình Trần Vĩnh",
        relationPlaceholder: "vd: Chắt của Trần Vĩnh Quang, Vợ/chồng của thành viên gia đình, v.v.",
        contributionDetails: "Chi Tiết Đóng Góp",
        contributionType: "Loại Đóng Góp",
        selectType: "Chọn loại đóng góp...",
        contributionTypes: {
            newMember: "Thêm Thành Viên Gia Đình Mới",
            childSpouse: "Thêm Con Hoặc Vợ/Chồng",
            photos: "Gửi Ảnh",
            biography: "Tiểu Sử Hoặc Câu Chuyện Gia Đình",
            correction: "Sửa Thông Tin Hiện Có",
            document: "Tài Liệu/Hồ Sơ Lịch Sử",
            other: "Khác"
        },
        familyMemberName: "Tên Thành Viên Gia Đình (nếu có)",
        familyMemberPlaceholder: "Tên của thành viên gia đình liên quan",
        detailedDescription: "Mô Tả Chi Tiết",
        descriptionPlaceholder: "Vui lòng cung cấp thông tin chi tiết về đóng góp của bạn...",
        additionalInfo: "Thông Tin Bổ Sung",
        additionalPlaceholder: "Bất kỳ bối cảnh, ngày tháng, địa điểm hoặc ghi chú bổ sung nào...",
        submitNote: "Lưu ý: Đối với ảnh hoặc tài liệu, vui lòng đề cập trong mô tả. Sau khi gửi biểu mẫu này, bạn sẽ được liên hệ qua email với hướng dẫn cách gửi tệp một cách an toàn.",
        submitButton: "Gửi Yêu Cầu Đóng Góp",
        submitting: "Đang Chuẩn Bị Yêu Cầu...",
        thankYou: "Cảm ơn bạn! Yêu cầu đóng góp của bạn đã được chuẩn bị. Vui lòng gửi email vừa mở trong ứng dụng email của bạn.",
        required: "*"
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('vi'); // Default to Vietnamese

    useEffect(() => {
        // Load saved language preference
        const savedLanguage = localStorage.getItem('familyTreeLanguage');
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'vi')) {
            setLanguage(savedLanguage);
        }
    }, []);

    const switchLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem('familyTreeLanguage', lang);
    };

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[language];
        
        for (const k of keys) {
            value = value?.[k];
        }
        
        return value || key;
    };

    return (
        <LanguageContext.Provider value={{ language, switchLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};