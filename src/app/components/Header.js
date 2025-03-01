"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <h1 className="nav-title">Trần Vĩnh Family</h1>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="#poem">Poem</Link></li>
          <li><Link href="#tree">Family Tree</Link></li>

          {/* Dropdown Menu */}
          <li className="dropdown">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="dropdown-btn">
              More ▼
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link href="#history">Family History</Link></li>
                <li><Link href="#notable">Notable Ancestors</Link></li>
                <li><Link href="#contact">Contact</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}