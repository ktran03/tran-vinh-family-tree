"use client";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

const Header = () => {
    const { language, switchLanguage, t } = useLanguage();
    
    return (
        <header className="header">
            <nav className="nav">
                <Link href="/">
                    <h1 className="nav-title" style={{ cursor: "pointer" }}>Trần Vĩnh Family</h1>
                </Link>
                <ul className="nav-links">
                    <li><Link href="/">{t('home')}</Link></li>
                    <li><Link href="/gia-pha-pdf">{t('giaPhaPdf')}</Link></li>
                    <li><Link href="/family-tree">{t('familyTree')}</Link></li>
                    <li className="dropdown">
                        <button className="dropdown-btn">{t('poems')} ▼</button>
                        <ul className="dropdown-content">
                            <li><Link href="/poem-hoai-niem">Hoài Niệm Gia Tổ</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/videos">{t('videos')}</Link></li>
                    <li><Link href="/contribute">{t('contribute')}</Link></li>
                    <li className="dropdown">
                        <button className="dropdown-btn">
                            {language === 'vi' ? '🇻🇳 VI' : '🇺🇸 EN'} ▼
                        </button>
                        <ul className="dropdown-content">
                            <li>
                                <button 
                                    onClick={() => switchLanguage('vi')}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: 'var(--charcoal)',
                                        fontSize: '16px',
                                        cursor: 'pointer',
                                        padding: '8px 12px',
                                        width: '100%',
                                        textAlign: 'left'
                                    }}
                                >
                                    🇻🇳 Tiếng Việt
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => switchLanguage('en')}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: 'var(--charcoal)',
                                        fontSize: '16px',
                                        cursor: 'pointer',
                                        padding: '8px 12px',
                                        width: '100%',
                                        textAlign: 'left'
                                    }}
                                >
                                    🇺🇸 English
                                </button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
