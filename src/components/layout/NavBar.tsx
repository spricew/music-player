import PlayerBar from "./PlayerBar";


export default function NavBar() {
    return (
        <nav className="h-24 w-fit bg-black border-t border-gray-800 flex items-center justify-between">
            <PlayerBar />

            <div className="flex flex-col items-center justify-center w-2/5 max-w-[722px]">
                <div className="flex space-x-6 items-center mb-2">
                    <button className="text-gray-400 hover:text-white text-xl transition-colors">⏮</button>
                    <button className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center hover:scale-105 transition-transform">
                        <span className="ml-0.5">▶</span>
                    </button>
                    <button className="text-gray-400 hover:text-white text-xl transition-colors">⏭</button>
                </div>

                
            </div>

            <div className="flex justify-end items-center w-1/3 min-w-[180px] space-x-2">
                <span className="text-gray-400 text-sm">🔊</span>
                <div className="w-24 h-1 bg-gray-600 rounded-full group cursor-pointer hover:h-1.5 transition-all">
                    <div className="w-2/3 h-full bg-white group-hover:bg-green-500 rounded-full"></div>
                </div>
            </div>
        </nav>
    );
}