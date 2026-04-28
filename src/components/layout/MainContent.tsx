interface SuggestedItem {
  id: number;
  title: string;
}

const suggestedItems: SuggestedItem[] = [
  { id: 1, title: 'Playlist 1' },
  { id: 2, title: 'Playlist 2' },
  { id: 3, title: 'Playlist 3' },
  { id: 4, title: 'Playlist 4' },
  { id: 5, title: 'Playlist 5' },
  { id: 6, title: 'Playlist 6' },
];

export default function MainContent() {
  return (
    <main className="flex-1 bg-neutral-900 overflow-y-auto rounded-lg m-2 p-6">
      <header className="flex justify-between items-center mb-8 sticky top-0 bg-neutral-900/90 py-2 z-10">
        <div className="flex space-x-2">
          <button className="bg-black/50 p-2 rounded-full w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white">&lt;</button>
          <button className="bg-black/50 p-2 rounded-full w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white">&gt;</button>
        </div>
        <div>
          <button className="bg-white text-black font-bold py-1 px-4 rounded-full text-sm hover:scale-105 transition-transform">
            Explorar Premium
          </button>
        </div>
      </header>

      <div>
        <h1 className="text-3xl font-bold mb-6">Buenas tardes</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {suggestedItems.map((item) => (
            <div key={item.id} className="bg-white/10 hover:bg-white/20 transition-colors h-16 rounded flex items-center cursor-pointer overflow-hidden group">
              <div className="h-full w-16 bg-gray-500 shrink-0 shadow-[4px_0_10px_rgba(0,0,0,0.3)]"></div>
              <p className="font-bold ml-4 text-sm">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}