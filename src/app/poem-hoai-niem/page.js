"use client";

import React from "react";
import PoemComponent from "../components/PoemComponent";
import Header from "../components/Header";

export default function PoemHoaiNiemPage() {
    return (
        <>
            <Header />
            <div className="page-container">
                <PoemComponent />
            </div>
        </>
    );
}