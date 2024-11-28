import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { fetchWeather } from "./utils/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

const App = () => {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    const data = await fetchWeather(city);
    setWeather(data);
  };

  return (
    <div className="app">
      <div className="content">
        <h1 className="app-title">Weather App</h1>
        <SearchBar onSearch={handleSearch} />
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
};

export default App;
