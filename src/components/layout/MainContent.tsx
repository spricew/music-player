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
    <main className="flex-1 bg-neutral-900 overflow-y-auto p-6">
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