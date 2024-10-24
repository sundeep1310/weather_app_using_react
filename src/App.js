import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import Weather from './components/Weather';

const apiKey = "your api key here";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async (city) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      if (response.status === 404) {
        setError("Invalid City Name");
      } else {
        const data = await response.json();
        setWeatherData(data);
      }
    } catch (err) {
      setError("Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Search getWeather={getWeather} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;
