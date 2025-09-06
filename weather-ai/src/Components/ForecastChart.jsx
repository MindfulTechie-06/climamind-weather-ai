import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Sun", temp: 28 },
  { day: "Mon", temp: 26 },
  { day: "Tue", temp: 27 },
  { day: "Wed", temp: 23 },
  { day: "Thu", temp: 30 },
  { day: "Fri", temp: 25 },
];

export default function ForecastChart() {
  return (
    <div className="bg-gray-900 p-6 mt-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Weekly Forecast</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="day" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Line type="monotone" dataKey="temp" stroke="#3b82f6" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
