"use client";
import { useEffect, useState } from "react";
import bios from "../data/bios"; // Import bios separately
import { useLanguage } from "../contexts/LanguageContext";

const FamilyTreeComponent = () => {
    const { t } = useLanguage();
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);
    const [retryCount, setRetryCount] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const MAX_RETRIES = 10;

    // Helper function to get the correct image path
    const getImagePath = (imageName) => {
        const isProd = process.env.NODE_ENV === 'production';
        const basePath = isProd ? '/tran-vinh-family-tree' : '';
        return `${basePath}/images/${imageName}`;
    };

    useEffect(() => {
        console.log("Bio data loaded:", bios);
        console.log("Trần Vĩnh Cảnh bio:", bios["Trần Vĩnh Cảnh"]);
        
        const checkAndInitializeTree = () => {
            const treeContainer = document.getElementById("tree");
            if (!treeContainer) {
                console.error("❌ FamilyTree div not found!");
                return;
            }

            console.log("✅ FamilyTree div found, checking for FamilyTree library...");

            if (window.FamilyTree) {
                console.log("✅ FamilyTree library found, initializing tree...");
                setIsScriptLoaded(true);
                setErrorMessage("");
                const familyTree = new window.FamilyTree(treeContainer, {
                    layout: "tree",
                    siblingSeparation: 30,
                    levelSeparation: 100,
                    toolbar: true,
                    template: "hugo",
                    enableSearch: true,
                    nodeBinding: {
                        field_0: "name",
                        img_0: "img"
                    },
                    nodes: [
                        // Generation #4
                        { id: 1, name: "Trần Vĩnh Đắc", gender: "male" },

                        // Generation #5
                        { id: 2, fid: 1, name: "Trần Vĩnh Cảnh (Đức Long) (1861 - 1935)", gender: "male", img: getImagePath("tranvinhcanh.jpg"), pids: [118] },

                        // Generation #6
                        { id: 3, fid: 2, name: "Trần Vĩnh Chương", gender: "male", img: getImagePath("tranvinhchuong.jpg") },
                        { id: 4, fid: 2, name: "Trần Thị Lại", gender: "female", pids: [71], img: getImagePath("tranthilai.jpg") },
                            // Generation #7
                            { id: 64, fid: 4, name: "", gender: "male" },
                            { id: 65, fid: 4, name: "", gender: "male" },
                            { id: 66, fid: 4, name: "", gender: "male" },
                            { id: 67, fid: 4, name: "", gender: "female" },
                            { id: 68, fid: 4, name: "", gender: "female" },
                            { id: 69, fid: 4, name: "", gender: "female" },
                            { id: 70, fid: 4, name: "", gender: "female" },

                        { id: 5, fid: 2, name: "Trần Thị Lê", gender: "female", pids: [72,73], img: getImagePath("tranthile.jpg") },
                            { id: 74, fid: 5, name: "", gender: "male" },
                            { id: 75, fid: 5, name: "", gender: "male" },
                            { id: 76, fid: 5, name: "", gender: "female" },

                        { id: 6, fid: 2, name: "Trần Thị Thể", gender: "female", pids: [77], img: getImagePath("tranthithe.jpg") },
                            { id: 78, fid: 6, name: "Huynh Van Muoi", gender: "male" },

                        { id: 7, fid: 2, name: "Trần Vĩnh Tiệm (1890 - 1950)", gender: "male", pids: [54], img: getImagePath("tranvinhtiem.jpg") },

                            { id: 12, fid: 7, name: "Trần Vĩnh Hoàng", gender: "male", img: getImagePath("tranvinhhoang.jpg") },
                                { id: 98, fid: 12, name: "Trần Vĩnh Tuân", gender: "male" },
                                { id: 100, fid: 12, name: "Trần Vĩnh Thừa", gender: "male" },
                                { id: 111, fid: 12, name: "Trân Vinh Lệnh", gender: "male" },
                                { id: 117, fid: 12, name: "Trần Thị Bạch", gender: "female" },
                                { id: 113, fid: 12, name: "Trần Vĩnh Hiệu", gender: "male" },
                                { id: 114, fid: 12, name: "Trần Thi Sen", gender: "female" },
                                { id: 115, fid: 12, name: "Trần Thi Trung", gender: "female" },
                                { id: 116, fid: 12, name: "Trân Thị Thành", gender: "female" },

                           { id: 13, fid: 7, name: "Trần Vĩnh Lại", gender: "male" },
                                { id: 101, fid: 13, name: "Trần Vĩnh Van", gender: "male" },
                                { id: 102, fid: 13, name: "Trần Vĩnh Tuu", gender: "male" },
                                { id: 103, fid: 13, name: "Trần Thi Net", gender: "female" },
                                { id: 104, fid: 13, name: "Trần Vĩnh Lap", gender: "male" },
                                { id: 105, fid: 13, name: "Trần Vĩnh Mah", gender: "male" },
                                { id: 106, fid: 13, name: "Trần Thi Hanh", gender: "female" },
                                { id: 107, fid: 13, name: "Trần Vĩnh Xuan", gender: "male" },
                                { id: 108, fid: 13, name: "Trần Thi Thy", gender: "female" },
                                { id: 109, fid: 13, name: "Trần Thi Tuyet", gender: "female" },

                           { id: 14, fid: 7, name: "Trần Vĩnh Quang / Ứng (1920 - 1992)", gender: "male", img: getImagePath("tranvinhquang.jpg")  },
                                { id: 16, fid: 14, name: "Trần Thị Nam", gender: "female", img: getImagePath("tranthinam.jpg") },
                                    { id: 28, fid: 16, name: "Linh", gender: "female", img: "" },
                                        { id: 126, fid: 28, name: "Tony", gender: "male", img: "" },
                                        { id: 127, fid: 28, name: "Andy", gender: "male", img: "" },
                                        { id: 128, fid: 28, name: "Jenny", gender: "female", img: "" },

                                    { id: 29, fid: 16, name: "Thanh", gender: "male", img: "" },
                                        { id: 129, fid: 29, name: "", gender: "female", img: "" },
                                        { id: 130, fid: 29, name: "", gender: "female", img: "" },

                                    { id: 41, fid: 16, name: "Tiến", gender: "male", img: "" },
                                        { id: 131, fid: 41, name: "", gender: "female", img: "" },
                                        { id: 132, fid: 41, name: "", gender: "female", img: "" },

                                    { id: 42, fid: 16, name: "Tinh", gender: "male", img: "" },
                                        { id: 133, fid: 42, name: "", gender: "female", img: "" },

                                    { id: 43, fid: 16, name: "Be", gender: "female", img: "" },
                                        { id: 134, fid: 43, name: "", gender: "female", img: "" },
                                        { id: 135, fid: 43, name: "", gender: "female", img: "" },

                                    { id: 44, fid: 16, name: "Phap", gender: "male", img: "" },
                                        { id: 136, fid: 44, name: "", gender: "female", img: "" },
                            
                                    
                                { id: 17, fid: 14, name: "Trần Vĩnh Hiền", gender: "male", img: getImagePath("tranvinhhien.jpg") },
                                    { id: 30, fid: 17, name: "Trần Vĩnh Đức", gender: "male" },
                                        { id: 137, fid: 30, name: "", gender: "male" },
                                        { id: 138, fid: 30, name: "", gender: "male" },

                                    { id: 31, fid: 17, name: "Trần Thị Nhi", gender: "female" },
                                        { id: 139, fid: 31, name: "", gender: "male" },
                                        { id: 140, fid: 31, name: "", gender: "male" },

                                    
                                { id: 22, fid: 14, name: "Trần Thị Lanh", gender: "female", img: getImagePath("tranthilanh.png") },
                                    { id: 60, fid: 22, name: "Cuc", gender: "female" },
                                        { id: 119, fid: 60, name: "Kanesha", gender: "female" },
                                        { id: 120, fid: 60, name: "", gender: "male" },

                                    { id: 61, fid: 22, name: "Hoa", gender: "female" },
                                        { id: 121, fid: 61, name: "", gender: "female" },
                                        { id: 122, fid: 61, name: "", gender: "female" },
    
                                { id: 15, fid: 14, name: "Trần Vĩnh Sự (1950 - )", gender: "male", pids: [50] }, 
                                    { id: 24, fid: 15, name: "Trần Thị My Trang", gender: "female", img: getImagePath("tranthitrang.png"), pids: [51] },
                                        { id: 45, fid: 24, name: "Maleena Nassachanh", gender: "female"},
                                        { id: 46, fid: 24, name: "Jax Nassachanh", gender: "male"},
            
                                    { id: 23, fid: 15, name: "Trần Vĩnh Khanh", gender: "male", img: getImagePath("tranvinhkhanh.png"), pids: [53]},
                                    { id: 25, fid: 15, name: "Trần Thị My Triều", gender: "female", img: "", pids: [52] },
                                        { id: 47, fid: 25, name: "Kate Xu", gender: "female"},
                                        { id: 48, fid: 25, name: "Kai Xu", gender: "male"},
                                    { id: 27, fid: 15, name: "Trần Thị My Kỳ", gender: "female" , img: ""},
                                    { id: 26, fid: 15, name: "Trần Thị My Kiều", gender: "female", img: getImagePath("tranthikieu.png") },
            
                                { id: 19, fid: 14, name: "Trần Vĩnh Thịnh", gender: "male" },
                                    { id: 55, fid: 19, name: "Trần Vĩnh Bon", gender: "male" },
                                        { id: 123, fid: 55, name: "", gender: "male" },
                                        { id: 124, fid: 55, name: "", gender: "female" },

                                    { id: 56, fid: 19, name: "Trần Thi Sony", gender: "female" },
                                    { id: 57, fid: 19, name: "Trần Thi ____", gender: "female" },
                                    
                                { id: 20, fid: 14, name: "Trần Vĩnh Bình", gender: "male" },
                                    { id: 58, fid: 20, name: "Trần Vĩnh Michael", gender: "male" },
                                    { id: 59, fid: 20, name: "Trần Thi Julie", gender: "female" },
                                        { id: 125, fid: 59, name: "", gender: "female" },
                                    
                                { id: 21, fid: 14, name: "Trần Thị Phương", gender: "female" },
                                    { id: 62, fid: 21, name: "Ryan", gender: "male" },
                                    { id: 63, fid: 21, name: "____", gender: "female" },


                            { id: 110, fid: 7, name: "Trần Thi Trieu", gender: "female" },
                            // Generation #7
                            { id: 141, fid: 110, name: "Trang", gender: "female", pids: [144]  },
                                // Generation #8
                                { id: 142, fid: 141, name: "", gender: "male" },
                                { id: 143, fid: 141, name: "", gender: "female" },
    
    
                        { id: 8, fid: 2, name: "Trần Vĩnh Châu", gender: "male", pids: [79], img: getImagePath("tranvinhchau.jpg") },
                            { id: 80, fid: 8, name: "", gender: "male" },

                        { id: 112, fid: 2, name: "Tran Vinh Huu (Vi Vo Danh)", gender: "male", img: getImagePath("tranvinhhuu.jpg")},

                        { id: 9, fid: 2, name: "Trần Vĩnh Điềm", gender: "male", pids: [81], img: getImagePath("tranvinhdiem.jpg")  },
                            { id: 82, fid: 9, name: "", gender: "male" },
                            { id: 83, fid: 9, name: "", gender: "male" },
                            { id: 84, fid: 9, name: "", gender: "female" },
                            { id: 85, fid: 9, name: "", gender: "female" },
                            { id: 86, fid: 9, name: "", gender: "female" },
                            { id: 87, fid: 9, name: "", gender: "female" },
                            { id: 88, fid: 9, name: "", gender: "female" },
                            
                        { id: 10, fid: 2, name: "Trần Vĩnh Lãng", gender: "male", pids: [89], img: getImagePath("tranvinhlang.jpg")  },
                            { id: 32, fid: 10, name: "Trần Vĩnh Hiep", gender: "male" },
                                { id: 40, fid: 32, name: "Trần Vĩnh Sac", gender: "male" },
                                    { id: 148, fid: 40, name: "", gender: "male" },
                                    { id: 149, fid: 40, name: "", gender: "male" },
                                    { id: 150, fid: 40, name: "", gender: "male" },
                                    { id: 151, fid: 40, name: "", gender: "male" },

                            { id: 33, fid: 10, name: "Hoi", gender: "male" },
                            { id: 34, fid: 10, name: "Tho", gender: "male" },
                                { id: 145, fid: 34, name: "Chi Thuy", gender: "female" },
                                    { id: 146, fid: 145, name: "", gender: "female" },
                                    { id: 147, fid: 145, name: "", gender: "male" },

                            { id: 35, fid: 10, name: "Truong", gender: "male" },
                            { id: 36, fid: 10, name: "Tran Thi Cong", gender: "female" },
                            { id: 37, fid: 10, name: "Cuc", gender: "female" },
                            { id: 38, fid: 10, name: "Gai", gender: "female" },
                            { id: 39, fid: 10, name: "Thuong", gender: "female" },
                            
                        { id: 11, fid: 2, name: "Trần Vĩnh Cường", gender: "male", pids: [90, 97], img: getImagePath("tranvinhcuong.jpg")  },
                            { id: 91, fid: 11, name: "", gender: "male" },
                            { id: 92, fid: 11, name: "", gender: "male" },
                            { id: 93, fid: 11, name: "", gender: "female" },
                            { id: 94, fid: 11, name: "", gender: "female" },
                            { id: 95, fid: 11, name: "", gender: "female" },
                            { id: 96, fid: 11, name: "", gender: "female" },

                        // Spouses
                        { id: 71, name: "Nguyen Xich", gender: "male", pids: [4] },
                        { id: 72, name: "Nguyen Van The", gender: "male", pids: [5] },
                        { id: 73, name: "Nguyen Than", gender: "male", pids: [5] },
                        { id: 77, name: "Huynh Van Do", gender: "male", pids: [6], img: getImagePath("huynhvando.jpg")  },
                        { id: 79, name: "Duong Thi Don", gender: "male", pids: [8], img: getImagePath("duongthidon.jpg")  },
                        { id: 81, name: "Le Thi Ke", gender: "female", pids: [9], img: getImagePath("lethike.jpg")  },
                        { id: 89, name: "Huynh Thi Au", gender: "female", pids: [10], img: getImagePath("huynhthiau.jpg")  },
                        { id: 90, name: "Phan Thi Xuy", gender: "female", pids: [11], img: getImagePath("phanthixuy.jpg")  },
                        { id: 97, name: "Tran Thi Te", gender: "female", pids: [11], img: getImagePath("tranthite.jpg")  },
                        { id: 50, name: "Le Thi Thu Huong", gender: "female", pids: [15] },
                        { id: 53, name: "Tien Nguyen", gender: "female", pids: [23]},
                        { id: 51, name: "Randy Nasschanh", gender: "male", pids: [24] },
                        { id: 52, name: "Yao Xu", gender: "male", pids: [25] },
                        { id: 54, name: "Công tôn nữ thị Lựu", gender: "female", pids: [7], img: getImagePath("congtonnuthiluu.jpg") },
                        { id: 118, name: "Tran Thi Lu", gender: "female", pids: [2], img: getImagePath("tranthilu.jpg") },
                        { id: 144, name: "Nick", gender: "male", pids: [141] },

                    ]
                });

                // ✅ Fix: Attach event handler to familyTree AFTER it's created
                familyTree.on("click", function (event) {
                    if (!event || !event.node) return;
                    const fullName = event.node.name;
                    const personName = fullName.split(" (")[0]; // Remove birth-death years if present
                    console.log("Clicked person:", fullName, "-> Searching for:", personName);
                    
                    const bioData = bios[personName];
                    console.log("Bio data found:", bioData);
                    
                    if (bioData) {
                        // Handle new bio structure with text and image
                        const personData = {
                            name: personName, 
                            bio: typeof bioData === 'string' ? bioData : bioData.text,
                            image: typeof bioData === 'object' ? bioData.image : null
                        };
                        console.log("Setting selected person:", personData);
                        setSelectedPerson(personData);
                    } else {
                        console.log("No bio data found, setting default");
                        setSelectedPerson({ 
                            name: personName, 
                            bio: "No biography available.",
                            image: null
                        });
                    }
                });

            } else if (retryCount < MAX_RETRIES) {
                console.log(`⏳ Waiting for FamilyTreeJS to load... (Attempt ${retryCount + 1}/${MAX_RETRIES})`);
                setTimeout(() => {
                    setRetryCount(prev => prev + 1);
                }, 500);
            } else {
                const error = "❌ FamilyTreeJS not loaded after maximum retries!";
                console.error(error);
                setErrorMessage(error);
            }
        };

        // Initial delay to ensure DOM is ready and script is loaded
        const initialDelay = setTimeout(checkAndInitializeTree, 1500);

        return () => {
            clearTimeout(initialDelay);
        };
    }, [retryCount]);

    return (
        <div style={{ width: "100%", height: "calc(100vh - 160px)" }}>
            {!isScriptLoaded && !errorMessage && (
                <div style={{ 
                    textAlign: "center", 
                    padding: "40px",
                    background: "var(--ivory)",
                    color: "var(--charcoal)"
                }}>
                    <p>{t('loadingTree')} (Attempt {retryCount + 1}/{MAX_RETRIES})</p>
                </div>
            )}
            {errorMessage && (
                <div style={{ 
                    textAlign: "center", 
                    padding: "40px",
                    background: "#ffebee",
                    color: "#c62828",
                    border: "2px solid #ef5350",
                    borderRadius: "8px",
                    margin: "20px"
                }}>
                    <p>{errorMessage}</p>
                    <p style={{ fontSize: "0.9rem", marginTop: "10px" }}>{t('refreshPage')}</p>
                </div>
            )}
            <div id="tree" style={{ 
                width: "100%", 
                height: "100%",
                overflow: "auto"
            }}></div>

            {selectedPerson && (
                <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0, 0, 0, 0.7)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1000
                }}>
                    <div style={{
                        background: "var(--ivory)",
                        padding: "30px",
                        borderRadius: "12px",
                        maxWidth: selectedPerson.image ? "800px" : "500px",
                        maxHeight: "90vh",
                        overflow: "auto",
                        border: "3px solid var(--golden-yellow)",
                        boxShadow: "0 12px 36px rgba(0,0,0,0.3)",
                        position: "relative"
                    }}>
                        <button 
                            onClick={() => setSelectedPerson(null)}
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "15px",
                                background: "var(--imperial-red)",
                                color: "white",
                                border: "none",
                                borderRadius: "50%",
                                width: "30px",
                                height: "30px",
                                cursor: "pointer",
                                fontSize: "16px",
                                fontWeight: "bold"
                            }}
                        >
                            ×
                        </button>
                        
                        <h2 style={{
                            color: "var(--imperial-red)",
                            fontFamily: "Crimson Text, serif",
                            fontSize: "24px",
                            fontWeight: "600",
                            marginBottom: "20px",
                            textAlign: "center",
                            borderBottom: "2px solid var(--golden-yellow)",
                            paddingBottom: "10px"
                        }}>
                            {selectedPerson.name}
                        </h2>
                        
                        <div style={{
                            display: selectedPerson.image ? "flex" : "block",
                            gap: selectedPerson.image ? "20px" : "0",
                            alignItems: "flex-start"
                        }}>
                            {selectedPerson.image && (
                                <div style={{
                                    flex: "0 0 300px",
                                    textAlign: "center"
                                }}>
                                    <img 
                                        src={getImagePath(selectedPerson.image)}
                                        alt={`Biography of ${selectedPerson.name}`}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            borderRadius: "8px",
                                            border: "2px solid var(--golden-yellow)",
                                            boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
                                        }}
                                        onError={(e) => {
                                            console.error("Failed to load bio image:", selectedPerson.image);
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                </div>
                            )}
                            
                            <div style={{
                                flex: selectedPerson.image ? "1" : "auto"
                            }}>
                                <p style={{
                                    color: "var(--charcoal)",
                                    fontFamily: "Noto Serif, serif",
                                    fontSize: "16px",
                                    lineHeight: "1.6",
                                    margin: "0"
                                }}>
                                    {selectedPerson.bio}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FamilyTreeComponent;
