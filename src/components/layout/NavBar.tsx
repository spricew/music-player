import PlayerBar from "./PlayerBar";


export default function NavBar() {
    return (
        <nav className="flex items-center justify-between h-24 w-full p-2 box-content bg-black border-t border-gray-800 ">
            <PlayerBar />
        </nav>
    );
}