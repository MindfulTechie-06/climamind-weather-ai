import { getBackground } from "../utils/getBackground";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Sun", temp: 28 },
  { day: "Mon", temp: 26 },
  { day: "Tue", temp: 27 },
  { day: "Wed", temp: 23 },
  { day: "Thu", temp: 30 },
  { day: "Fri", temp: 25 },
];

export default function Dashboard() {
  const weather = "Stormy with partly cloudy"; // later from API
  const bg = getBackground(weather);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${bg} flex items-center justify-center p-6`}>
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 max-w-4xl w-full">
        {/* City + Temp */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-cyan-400">Brooklyn, NY</h1>
          <p className="text-6xl font-extrabold mt-2">18°C</p>
          <p className="text-lg text-gray-300">{weather}</p>
          <p className="text-gray-400">High: 29°C | Low: 12°C</p>
        </div>

        {/* AI Weather Advice */}
        <div className="mt-6 bg-red-500/20 border border-red-400 rounded-xl p-4 text-center">
          <p className="text-red-400 font-semibold">
            ⚠️ Dangerous conditions detected. Please carry an umbrella and avoid outdoor travel after 6 PM.
          </p>
        </div>

        {/* Weekly Forecast */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-200 mb-4">Weekly Forecast</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <XAxis dataKey="day" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip />
              <Line type="monotone" dataKey="temp" stroke="#4ade80" strokeWidth={3} dot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
