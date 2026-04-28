export default function PlayerBar() {
    return (
      <footer className="h-24 bg-black border-t border-gray-800 flex items-center justify-between px-4 pb-2">
        <div className="flex items-center w-1/3 min-w-[180px]">
          <div className="w-14 h-14 bg-gray-700 rounded shadow-md"></div>
          <div className="ml-4">
            <p className="text-sm text-white hover:underline cursor-pointer">Nombre de la Canción</p>
            <p className="text-xs text-gray-400 hover:underline cursor-pointer">Artista</p>
          </div>
        </div>
  
        <div className="flex flex-col items-center justify-center w-2/5 max-w-[722px]">
          <div className="flex space-x-6 items-center mb-2">
            <button className="text-gray-400 hover:text-white text-xl transition-colors">⏮</button>
            <button className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center hover:scale-105 transition-transform">
              <span className="ml-0.5">▶</span>
            </button>
            <button className="text-gray-400 hover:text-white text-xl transition-colors">⏭</button>
          </div>
          
          <div className="w-full flex items-center space-x-2">
            <span className="text-xs text-gray-400">0:00</span>
            <div className="flex-1 h-1 bg-gray-600 rounded-full group cursor-pointer hover:h-1.5 transition-all">
              <div className="w-1/3 h-full bg-white group-hover:bg-green-500 rounded-full"></div>
            </div>
            <span className="text-xs text-gray-400">3:45</span>
          </div>
        </div>
  
        <div className="flex justify-end items-center w-1/3 min-w-[180px] space-x-2">
          <span className="text-gray-400 text-sm">🔊</span>
          <div className="w-24 h-1 bg-gray-600 rounded-full group cursor-pointer hover:h-1.5 transition-all">
             <div className="w-2/3 h-full bg-white group-hover:bg-green-500 rounded-full"></div>
          </div>
        </div>
      </footer>
    );
  }