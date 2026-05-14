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
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].main}</p>
        </div>
      )}
    </div>
  );
}
