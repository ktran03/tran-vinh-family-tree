import FamilyTreeComponent from "./components/FamilyTreeComponent";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-6">Trần Vĩnh Family Tree</h1>
      <FamilyTreeComponent />
    </div>
  );
}