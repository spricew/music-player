import { IconPlayerPlayFilled, IconPlayerSkipBackFilled, IconPlayerSkipForwardFilled } from "@tabler/icons-react";

export default function PlayerBar() {
  return (
    <div className="flex flex-col gap-y-2 w-124 p-3 rounded-xl border border-outline-variant/15 bg-black-primary/40 backdrop-blur-2xl">
      <div className="flex items-center w-full">
        <SongDetails />
        <PlayerControls />
      </div>

      <div className="flex items-center gap-x-2 w-full">
        <span className="text-xs text-gray-400">0:00</span>
        <div className="flex-1 h-1 bg-gray-600 rounded-full group cursor-pointer hover:h-1.5 transition-all">
          <div className="w-2/3 h-full bg-white rounded-full"></div>
        </div>
        <span className="text-xs text-gray-400">3:45</span>
      </div>
    </div>
  );
}

export function SongDetails() {
  return (
    <div className="flex items-center">
      <div className="size-12 shrink-0 bg-gray-700 rounded"></div>
      <div className="ml-4">
        <p className="text-sm font-semibold text-white cursor-pointer">Nombre de la Canción</p>
        <p className="text-xs text-gray-400 cursor-pointer">Artista</p>
      </div>
    </div>
  );
}

export function PlayerControls() {
  return (
    <div className="ml-auto flex items-center justify-center gap-4 text-neutral-400">
      <button className="hover:text-white transition-colors">
        <IconPlayerSkipBackFilled size={20} />
      </button>

      <button className="hover:text-white transition-colors">
        <IconPlayerPlayFilled size={24} />
      </button>

      <button className="hover:text-white transition-colors">
        <IconPlayerSkipForwardFilled size={20} />
      </button>
    </div>
  );
}