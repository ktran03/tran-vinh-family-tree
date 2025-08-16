"use client";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const Header = () => {
    const { language, switchLanguage, t } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };
    
    return (
        <header className="header">
            <nav className="nav">
                <Link href="/" onClick={closeMobileMenu}>
                    <h1 className="nav-title" style={{ cursor: "pointer" }}>Trần Vĩnh Family</h1>
                </Link>
                
                {/* Hamburger menu button - only visible on mobile */}
                <button 
                    className="mobile-menu-btn"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                </button>
                
                <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                    <li><Link href="/" onClick={closeMobileMenu}>{t('home')}</Link></li>
                    <li><Link href="/gia-pha-pdf" onClick={closeMobileMenu}>{t('giaPhaPdf')}</Link></li>
                    <li><Link href="/family-tree" onClick={closeMobileMenu}>{t('familyTree')}</Link></li>
                    <li className="dropdown">
                        <button className="dropdown-btn">{t('poems')} ▼</button>
                        <ul className="dropdown-content">
                            <li><Link href="/poem-hoai-niem" onClick={closeMobileMenu}>Hoài Niệm Gia Tổ</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/videos" onClick={closeMobileMenu}>{t('videos')}</Link></li>
                    <li><Link href="/contribute" onClick={closeMobileMenu}>{t('contribute')}</Link></li>
                    <li className="dropdown">
                        <button className="dropdown-btn">
                            {language === 'vi' ? '🇻🇳 VI' : '🇺🇸 EN'} ▼
                        </button>
                        <ul className="dropdown-content">
                            <li>
                                <button 
                                    onClick={() => {
                                        switchLanguage('vi');
                                        closeMobileMenu();
                                    }}
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
                                    onClick={() => {
                                        switchLanguage('en');
                                        closeMobileMenu();
                                    }}
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
