import Sidebar from "@/components/layout/Sidebar";
import MainContent from "./MainContent";
import NavBar from "./NavBar";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <div className="flex h-screen bg-black text-white">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}