import Header from "./components/Header";
import PoemComponent from "./components/PoemComponent";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1 className="tree-title">Trần Vĩnh Gia Pha / Family Geneology</h1>
        <img src="/images/main.jpg" alt="Trần Vĩnh Canh" className="main-image" />
        <PoemComponent />
      </main>
    </>
  );
}