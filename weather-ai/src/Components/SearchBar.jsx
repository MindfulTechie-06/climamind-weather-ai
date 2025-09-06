export default function SearchBar() {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Enter city..."
        className="px-4 py-2 rounded-l-lg border border-gray-600 bg-gray-800 text-white focus:outline-none"
      />
      <button className="px-4 py-2 bg-blue-600 rounded-r-lg text-white">
        Search
      </button>
    </div>
  );
}
