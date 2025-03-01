"use client"; // Required for Next.js App Router components

import React from "react";
import FamilyTree from "react-family-tree";

// Sample data for testing
const nodes = [
  { id: "1", name: "Trần Vĩnh Cảnh (陳永景)", birth: "1861", death: "1935" },
  { id: "2", name: "Trần Vĩnh Tiệm (陳永漸)", birth: "1890", death: "1950", parentId: "1" },
  { id: "3", name: "Trần Vĩnh Quang (陳永光)", birth: "1920", death: "1992", parentId: "2" },
  { id: "4", name: "Trần Vĩnh Sự (陳永事)", birth: "1950", parentId: "3" }, // Your father
];

export default function FamilyTreeComponent() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <FamilyTree nodes={nodes} />
    </div>
  );
}