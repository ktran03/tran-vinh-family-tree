"use client";
import Link from "next/link";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <h1 className="nav-title">Trần Vĩnh Family</h1>
                <ul className="nav-links">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/family-tree">Family Tree</Link></li>
                    <li className="dropdown">
                        <button className="dropdown-btn">Poems ▼</button>
                        <ul className="dropdown-content">
                            {/* <li><Link href="/poem-hoai-niem">Hoài Niệm Gia Tổ</Link></li>
                            <li><Link href="/poem-farewell">Farewell Poem</Link></li> */}
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
