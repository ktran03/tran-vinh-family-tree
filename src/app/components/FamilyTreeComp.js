"use client";
import { useEffect } from "react";

const FamilyTreeComponent = () => {
    useEffect(() => {
        setTimeout(() => {
            const treeContainer = document.getElementById("tree");
            if (!treeContainer) {
                console.error("❌ FamilyTree div not found!");
                return;
            }

            console.log("✅ FamilyTree div found, initializing tree...");

            if (window.FamilyTree) {
                new window.FamilyTree(treeContainer, {
                    layout: "tree", // Ensure vertical layout
                    siblingSeparation: 30,
                    levelSeparation: 100, // Increase level separation for readability
                    template: "hugo", // Supports images
                    enableSearch: true,
                    nodeBinding: {
                        field_0: "name",
                        img_0: "img" // Binds image field
                    },
                    nodes: [
                        // Root Ancestor
                        { id: 1, name: "Trần Vĩnh Đắc", gender: "male" },

                        // Next Generation
                        { id: 2, fid: 1, name: "Trần Vĩnh Cảnh (Đức Long) (1861 - 1935)", gender: "male", img: "/images/tranvinhcanh.jpg" },

                        // Children of Trần Vĩnh Cảnh
                        { id: 3, fid: 2, name: "Trần Vĩnh Chương", gender: "male" },
                        { id: 4, fid: 2, name: "Trần Thị Lại", gender: "female" },
                        { id: 5, fid: 2, name: "Trần Thị Lê", gender: "female" },
                        { id: 6, fid: 2, name: "Trần Thị Thể", gender: "female" },
                        { id: 7, fid: 2, name: "Trần Vĩnh Tiệm (1890 - 1950)", gender: "male" },
                        { id: 8, fid: 2, name: "Trần Vĩnh Châu", gender: "male" },
                        { id: 9, fid: 2, name: "Trần Vĩnh Điềm", gender: "male" },
                        { id: 10, fid: 2, name: "Trần Vĩnh Lãng", gender: "male" },
                        { id: 11, fid: 2, name: "Trần Vĩnh Cường", gender: "male" },

                        // Children of Trần Vĩnh Tiệm
                        { id: 12, fid: 7, name: "Trần Vĩnh Hoàng", gender: "male" },
                        { id: 13, fid: 7, name: "Trần Vĩnh Lại", gender: "male" },
                        { id: 14, fid: 7, name: "Trần Vĩnh Quang / Ứng (1920 - 1992)", gender: "male" },

                        // Children of Trần Vĩnh Quang
                        { id: 15, fid: 14, name: "Trần Vĩnh Sự (1950 - )", gender: "male" },
                        { id: 16, fid: 14, name: "Trần Thị Nam", gender: "female"},
                        { id: 17, fid: 14, name: "Trần Vĩnh Hiền", gender: "male"},
                        { id: 19, fid: 14, name: "Trần Vĩnh Thịnh", gender: "male" },
                        { id: 20, fid: 14, name: "Trần Vĩnh Bình", gender: "male" },
                        { id: 21, fid: 14, name: "Trần Thị Phương", gender: "female" },
                        { id: 22, fid: 14, name: "Trần Thị Lanh", gender: "female", img: "/images/tranthilanh.png" },

                        // Grandchildren (Children of Trần Vĩnh Sự)
                        { id: 23, fid: 15, name: "Trần Vĩnh Khanh", gender: "male", img: "/images/tranvinhkhanh.png"},
                        { id: 24, fid: 15, name: "Trần Thị Trang", gender: "female", img: "/images/tranthitrang.png" },
                        { id: 25, fid: 15, name: "Trần Thị Triều", gender: "female", img: "" },
                        { id: 26, fid: 15, name: "Trần Thị Kiều", gender: "female", img: "/images/tranthikieu.png" },
                        { id: 27, fid: 15, name: "Trần Thị Kỳ", gender: "female" , img: ""},

                        // Grandchildren (Children of Trần Thị Nam)
                        { id: 28, fid: 16, name: "Linh", gender: "female", img: "" },
                        { id: 29, fid: 16, name: "Thanh", gender: "male", img: "" },
                        { id: 41, fid: 16, name: "Tiến", gender: "male", img: "" },
                        { id: 42, fid: 16, name: "Tinh", gender: "male", img: "" },
                        { id: 43, fid: 16, name: "Be", gender: "female", img: "" },
                        { id: 44, fid: 16, name: "Phap", gender: "male", img: "" },

                        // Grandchildren (Children of Trần Vĩnh Hiền)
                        { id: 30, fid: 17, name: "Trần Vĩnh Đức", gender: "male" },
                        { id: 31, fid: 17, name: "Trần Thị Nhi", gender: "female" }
                    ]
                });
            } else {
                console.error("❌ FamilyTreeJS not loaded!");
            }
        }, 500);
    }, []);

    return <div id="tree" style={{ width: "100%", height: "3000px", border: "1px solid black" }}></div>;
};

export default FamilyTreeComponent;