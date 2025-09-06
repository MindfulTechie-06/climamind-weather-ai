// src/Components/ForecastChart.jsx
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, YAxis } from "recharts";

const data = [
  { day: "Sunday", temp: 28 },
  { day: "Monday", temp: 26 },
  { day: "Tuesday", temp: 27 },
  { day: "Wednesday", temp: 23 },
  { day: "Thursday", temp: 30 },
  { day: "Friday", temp: 25 },
];

export default function ForecastChart() {
  return (
    // Removed background and padding from the container div
    <div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="day" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} hide={true}/>
          <Tooltip
            contentStyle={{
              background: "rgba(0, 0, 0, 0.5)",
              border: "none",
              color: "white"
            }}
          />
          <Line 
            type="monotone" 
            dataKey="temp" 
            stroke="#ffffff" 
            strokeWidth={3} 
            dot={{ r: 5, fill: '#38bdf8' }}
            activeDot={{ r: 8, stroke: '#0ea5e9' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}