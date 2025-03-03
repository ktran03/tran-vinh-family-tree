"use client";
import Link from "next/link";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <h1 className="nav-title">Trần Vĩnh Family</h1>
                <ul className="nav-links">
                    <li><Link href="/">Home</Link></li>
                    <li><a href="/family-tree">Family Tree</a></li>
                    <li className="dropdown">
                        <button className="dropdown-btn">Poems ▼</button>
                        <ul className="dropdown-content">
                        <li><a href="/poem-hoai-niem">Hoài Niệm Gia Tổ</a></li>  {/* Add this new link */}
                        <li><a href="/poem-farewell" style={{ color: "black" }}>Farewell Poem</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;