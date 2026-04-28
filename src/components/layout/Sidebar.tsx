interface Playlist {
    id: string;
    name: string;
  }
  
  const mockPlaylists: Playlist[] = [
    { id: '1', name: 'Mi Playlist #1' },
    { id: '2', name: 'Rock Clásico' },
    { id: '3', name: 'Para Programar' },
  ];
  
  export default function Sidebar() {
    return (
      <aside className="w-64 bg-black flex flex-col p-4 space-y-4">
        <nav className="space-y-4 font-bold text-gray-400">
          <a href="#" className="block hover:text-white transition-colors">Inicio</a>
          <a href="#" className="block hover:text-white transition-colors">Buscar</a>
          <a href="#" className="block hover:text-white transition-colors">Tu Biblioteca</a>
        </nav>
        
        <div className="mt-8 flex-1 overflow-y-auto">
          <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">Playlists</p>
          <ul className="space-y-3 text-gray-400 text-sm">
            {mockPlaylists.map((playlist) => (
              <li key={playlist.id} className="hover:text-white cursor-pointer transition-colors">
                {playlist.name}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    );
  }