import React from 'react';

function Weather({ data }) {
  const { name, main, wind, weather } = data;
  const weatherIcon = weather[0].main.toLowerCase();

  return (
    <div className="weather-card">
      <img src={`./images/${weatherIcon}.png`} className="weather-icon" alt={weather[0].description} />
      <h2>{name}</h2>
      <h1>{main.temp}°C</h1>
      <h3>Max Temp: {main.temp_max}°C</h3>
      <h3>Min Temp: {main.temp_min}°C</h3>
      <div className="details">
        <div>
          <img src="./images/humidity.png" alt="Humidity Icon" />
          <p>Humidity: {main.humidity}%</p>
        </div>
        <div>
          <img src="./images/wind.png" alt="Wind Speed Icon" />
          <p>Wind: {wind.speed} km/h</p>
        </div>
      </div>
    </div>
  );
}

export default Weather;
