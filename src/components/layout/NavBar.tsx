import PlayerBar from "@/components/ui/PlayerBar";


export default function NavBar() {
    return (
        <nav className="fixed bottom-0 flex items-center justify-center h-fit w-full p-2">
            <PlayerBar />
        </nav>
    );
}