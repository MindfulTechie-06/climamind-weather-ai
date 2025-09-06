export default function WeatherCard() {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg text-center">
      <h2 className="text-xl font-semibold">Brooklyn, NY</h2>
      <p className="text-5xl font-bold mt-2">18°C</p>
      <p className="text-gray-400">Stormy with partly cloudy</p>
      <div className="flex justify-between mt-4 text-sm text-gray-300">
        <span>High: 29°C</span>
        <span>Low: 12°C</span>
      </div>
    </div>
  );
}
