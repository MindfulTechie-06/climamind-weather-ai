import SearchBar from "../Components/SearchBar";
import WeatherCard from "../Components/WeatherCard";
import AdviceCard from "../Components/AdviceCard";
import ForecastChart from "../Components/ForecastChart";

export default function Dashboard() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <WeatherCard />
        <AdviceCard />
      </div>
      <ForecastChart />
    </div>
  );
}
