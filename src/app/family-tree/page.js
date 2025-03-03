"use client";

import React from "react";
import FamilyTreeComp from "../components/FamilyTreeComp";

export default function FamilyTreePage() {
    return (
        <div className="page-container">
            <h1 className="page-title">Trần Vĩnh Family Tree</h1>
            <FamilyTreeComp />
        </div>
    );
}