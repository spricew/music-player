export default function PlayerBar() {
  return (
    <div className="flex flex-col gap-y-2 w-124 p-4 rounded-md bg-zinc-800">
      <div className="flex items-center w-full">
        <div className="w-14 h-14 shrink-0 bg-gray-700 rounded"></div>
        <div className="ml-4">
          <p className="text-sm font-semibold text-white cursor-pointer">Nombre de la Canción</p>
          <p className="text-xs text-gray-400 cursor-pointer">Artista</p>
        </div>
      </div>

      <div className="flex items-center gap-x-2 w-full">
        <span className="text-xs text-gray-400">0:00</span>
        <div className="flex-1 h-1 bg-gray-600 rounded-full group cursor-pointer hover:h-1.5 transition-all">
          <div className="w-1/3 h-full bg-white group-hover:bg-green-500 rounded-full"></div>
        </div>
        <span className="text-xs text-gray-400">3:45</span>
      </div>
    </div>
  );
}