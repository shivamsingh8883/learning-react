import { useState } from "react";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cfd1636b5cfcd29be9e2b5a72e67eef4&units=metric`,
      );
      const data = await response.json();
      if (data.main) {
        setWeather(data);
      } else {
        alert("City not found");
      }
    } catch (error) {
      alert("Error fetching weather");
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Weather App
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Search
          </button>
        </div>

        {weather && (
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 mt-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {weather.name}
            </h2>
            <div className="space-y-3">
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Temperature:</span>{" "}
                {weather.main.temp}°C
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Condition:</span>{" "}
                {weather.weather[0].main}
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Humidity:</span>{" "}
                {weather.main.humidity}%
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Wind Speed:</span>{" "}
                {weather.wind.speed} m/s
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Pressure:</span>{" "}
                {weather.main.pressure} hPa
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  