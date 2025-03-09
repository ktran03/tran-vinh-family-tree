
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Main Title */}
        <h1 className="tree-title" style={{ fontSize: "3rem", lineHeight: "1.5" }}>
          Tran Vinh Family Genealogy
        </h1>
      </main>
    </>
  );
}
