import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `http://localhost:5000/weather?city=${city}`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError("City not found");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Real-Time Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <WeatherCard weatherData={weatherData} />
    </div>
  );
}

export default App;
