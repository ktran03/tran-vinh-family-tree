
import Header from "./components/Header";
import PoemComponent from "./components/PoemComponent";
import IntroComponent from "./components/IntroComponent";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Family Logo */}
        <img 
          src="/images/tranvinhlogo.png" 
          alt="Trần Vĩnh Family Logo" 
          className="main-image" 
        />

        {/* Main Title */}
        <h1 className="tree-title" style={{ fontSize: "3rem", lineHeight: "1.5" }}>
          Gia Phả / Family Genealogy
        </h1>
        
        {/* Family Image */}
        <img 
          src="/images/main.jpg" 
          alt="Trần Vĩnh Ancestral Family" 
          className="main-image" 
        />



        {/* Optional Ancestral Quote */}
        {/* <h1 className="tree-title" style={{ fontSize: "0.8rem", lineHeight: "1.5" }}>
          The Ancestors’ Virtuous Deeds Prosper for a Thousand Years – Filial Children and Worthy Descendants Bring Eternal Honor
        </h1> */}
      </main>
    </>
  );
}
