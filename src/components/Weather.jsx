import React, { useState } from "react";
import axios from "axios";

const API_KEY = "91fadec1c6e1948349f2d033bf3bcbdc";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearchClick = () => {
    if (city) {
      setLoading(true);
      axios
        .get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        .then((response) => {
          setWeatherData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
          setLoading(false);
        });
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather Project</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>Search</button>
      {loading ? (
        <p>Loading...</p>
      ) : weatherData ? (
        <div className="weather-info">
          <h2>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Enter a city and click Search to get weather information</p>
      )}
      <nav className="main-navbar">
        <ul>
          <li>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <a href="/favorites">Favorites</a>
          </li>
          <li>
            <a href="/forecast">Forecast</a>
          </li>
          <li>
            <a href="/signin">SignIn</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Weather;
