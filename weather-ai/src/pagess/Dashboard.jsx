// src/pagess/Dashboard.jsx
import ForecastChart from '../Components/ForecastChart';
import RecentSearchCard from '../Components/RecentSearchCard';
import SearchBar from '../Components/SearchBar';
import Sidebar from '../Components/Sidebar';

export default function Dashboard() {
  const weather = "Stormy with partly cloudy"; // later from API

  return (
    <div className="min-h-screen p-4 lg:p-6 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
        
        {/* --- LEFT SIDEBAR --- */}
        <div className="lg:col-span-1 h-full">
          <Sidebar />
        </div>

        {/* --- MAIN CONTENT --- */}
        <main className="lg:col-span-3 flex flex-col gap-6">
          
          {/* Header */}
          <header className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-white/80">Brooklyn, New York, USA</p>
              <p className="text-sm text-white/50">Friday, January 4</p>
            </div>
            <div className="flex items-center gap-4">
              <SearchBar />
              <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg font-semibold">
                Download App
              </button>
            </div>
          </header>

          {/* Main Weather Info */}
          <section className="flex flex-col lg:flex-row justify-between items-start gap-6">
            <div className="flex items-start">
              <p className="text-8xl font-bold">18°</p>
              <div className="mt-2 ml-4">
                <p className="font-semibold">H 29°</p>
                <p className="text-white/70">L 12°</p>
              </div>
            </div>
            <p className="text-4xl text-white/80 max-w-xs text-left lg:text-right">
              {weather}
            </p>
          </section>

          {/* Recently Searched */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recently Searched</h2>
              <a href="#" className="text-cyan-400 text-sm">See All &gt;</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <RecentSearchCard location="Liverpool, UK" temp="16" condition="Partly Cloudy" />
              <RecentSearchCard location="Palermo, Italy" temp="-2" condition="Rain Thunder" />
            </div>
          </section>
          
          {/* Weekly Forecast */}
          <section className="bg-black/20 backdrop-blur-lg rounded-2xl p-6">
            <ForecastChart />
          </section>

        </main>
      </div>
    </div>
  );
}