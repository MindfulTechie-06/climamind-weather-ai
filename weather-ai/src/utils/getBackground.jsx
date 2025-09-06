export function getBackground(weather) {
  if (!weather) return "from-gray-900 via-gray-800 to-black";

  const condition = weather.toLowerCase();

  if (condition.includes("clear")) {
    return "from-yellow-400 via-orange-500 to-pink-600"; // Sunny
  }
  if (condition.includes("cloud")) {
    return "from-gray-700 via-gray-900 to-black"; // Cloudy
  }
  if (condition.includes("rain")) {
    return "from-blue-500 via-indigo-700 to-gray-900"; // Rainy
  }
  if (condition.includes("storm") || condition.includes("thunder")) {
    return "from-purple-900 via-gray-800 to-black"; // Stormy
  }
  if (condition.includes("snow")) {
    return "from-blue-100 via-blue-300 to-blue-500"; // Snow
  }

  return "from-gray-900 via-gray-800 to-black"; // Default
}
