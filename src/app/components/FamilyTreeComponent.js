"use client";

import React, { useState } from "react";

// Updated Family Tree Data
const familyData = {
  name: "Trần Vĩnh Đắc",
  children: [
    {
      name: "Trần Vĩnh Cảnh (Đức Long) (1861 - 1935)",
      children: [
        { name: "Trần Vĩnh Chương" },
        { name: "Trần Thị Lại" },
        { name: "Trần Thị Lê" },
        { name: "Trần Thị Thể" },
        {
          name: "Trần Vĩnh Tiệm (1890 - 1950)",
          children: [
            { name: "Trần Vĩnh Hoàng" },
            { name: "Trần Vĩnh Lại" },
            {
              name: "Trần Vĩnh Quang / Ứng (1920 - 1992)",
              children: [
                {
                  name: "Trần Vĩnh Sự (1950 - )",
                  children: [
                    { name: "You (Trần Vĩnh Khanh) (199X - )" },
                    { name: "Trần Thị Trang" },
                    { name: "Trần Thị Triều" },
                    { name: "Trần Thị Kiều" },
                    { name: "Trần Thị Kỳ" },
                  ],
                },
                {
                  name: "Trần Thị Nam",
                  children: [
                    { name: "Linh" },
                    { name: "Tiến" },
                    { name: "[Unknown Child]" },
                    { name: "[Unknown Child]" },
                  ],
                },
                {
                  name: "Trần Vĩnh Hiền",
                  children: [
                    { name: "Đức" },
                    { name: "Nhi" },
                  ],
                },
                { name: "Trần Thị Lịnh" },
                {
                  name: "Trần Vĩnh Thịnh",
                  children: [
                    { name: "Bốn" },
                    { name: "[Unknown Daughter]" },
                    { name: "[Unknown Daughter]" },
                  ],
                },
                {
                  name: "Trần Vĩnh Bình",
                  children: [
                    { name: "Michael" },
                    { name: "Julie" },
                  ],
                },
                {
                  name: "Trần Thị Phương",
                  children: [
                    { name: "Ryan" },
                    { name: "Michelle" },
                  ],
                },
                {
                  name: "Linh",
                  children: [
                    { name: "Cúc" },
                    { name: "Hoa" },
                  ],
                },
              ],
            },
          ],
        },
        { name: "Trần Vĩnh Châu" },
        { name: "Trần Vĩnh Điềm" },
        { name: "Trần Vĩnh Lãng" },
        { name: "Trần Vĩnh Cường" },
      ],
    },
  ],
};

// Recursive function to render the collapsible ASCII tree
const TreeNode = ({ node, level = 0 }) => {
  const [expanded, setExpanded] = useState(true);

  const toggleExpand = (e) => {
    e.stopPropagation(); // Prevent accidental clicks on parents
    setExpanded(!expanded);
  };

  return (
    <div>
      <div
        className="tree-node"
        onClick={toggleExpand}
        style={{
          paddingLeft: `${level * 20}px`,
          cursor: node.children ? "pointer" : "default",
        }}
      >
        {node.children && (expanded ? "▼ " : "▶ ")}
        {node.name}
      </div>
      {expanded &&
        node.children &&
        node.children.map((child, index) => <TreeNode key={index} node={child} level={level + 1} />)}
    </div>
  );
};

export default function FamilyTreeComponent() {
  return (
    <div className="tree-container">
      <h2 className="tree-title">Trần Vĩnh Family Tree</h2>
      <div className="tree-content">
        <TreeNode node={familyData} />
      </div>
    </div>
  );
}