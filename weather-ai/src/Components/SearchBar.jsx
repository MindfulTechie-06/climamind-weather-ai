// src/Components/SearchBar.jsx
export default function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search Location..."
        className="px-4 py-2 rounded-lg border-none bg-black/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
      {/* Search icon could be added here */}
    </div>
  );
}