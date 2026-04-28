import Sidebar from "@/components/layout/Sidebar"  ;
import MainContent from "./MainContent";
import PlayerBar from "./PlayerBar";

export default function MainLayout() {
  return (
    <div className="h-screen flex flex-col bg-black text-white overflow-hidden">
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
      <PlayerBar />
    </div>
  );
}