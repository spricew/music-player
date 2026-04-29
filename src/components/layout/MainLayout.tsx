import Sidebar from "@/components/layout/Sidebar";
import MainContent from "./MainContent";
import NavBar from "./NavBar";

export default function MainLayout() {
  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden">
      <NavBar />

      <div className="flex-1 flex overflow-hidden">
        {/* <Sidebar /> */}
        <MainContent />
      </div>

    </div>
  );
}