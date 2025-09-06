// src/Components/RecentSearchCard.jsx

export default function RecentSearchCard({ location, temp, condition }) {
  // A simple icon map for demonstration
  const weatherIcons = {
    "Partly Cloudy": "⛅️",
    "Rain Thunder": "⛈️"
  };

  return (
    <div className="bg-black/20 backdrop-blur-md p-4 rounded-xl flex items-center justify-between">
      <div className="text-left">
        <p className="font-semibold">{location}</p>
        <p className="text-sm text-white/70">{condition}</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-2xl font-bold">{temp}°</p>
        <p className="text-3xl">{weatherIcons[condition] || "❔"}</p>
      </div>
    </div>
  );
}