// src/Components/Sidebar.jsx

export default function Sidebar() {
  return (
    <aside className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 flex flex-col h-full">
      <h1 className="text-2xl font-bold mb-8">WeatherWise</h1>

      {/* Status Card */}
      <div className="bg-white/10 p-4 rounded-xl mb-6">
        <h3 className="font-semibold text-white/90">Status</h3>
        <div className="mt-4">
          <p className="text-lg font-bold text-red-400">Dangerous</p>
          <p className="text-xs text-white/60">High precipitation expected</p>
          {/* A visual representation like the gauge could be added here */}
        </div>
        <a href="#" className="text-sm text-cyan-400 mt-4 block">See More details &gt;</a>
      </div>
      
      {/* Map Placeholder */}
      <div className="flex-grow flex items-center justify-center">
        {/* You can replace this div with an actual map component or image */}
        <div className="w-full h-48 bg-white/5 rounded-xl flex items-center justify-center">
          <p className="text-white/40">Map Placeholder</p>
        </div>
      </div>

      <div className="mt-6 border-t border-white/10 pt-4">
        <p className="font-semibold">Brooklyn, New York, USA</p>
      </div>
    </aside>
  );
}