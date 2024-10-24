import React, { useState } from 'react';

function Search({ getWeather }) {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim() !== "") {
      getWeather(city);
      setCity('');  // Clear input field after search
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter a city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') handleSearch() }}  // Search on Enter key
      />
      <button onClick={handleSearch}>
        <img src="./images/search.png" alt="Search" />
      </button>
    </div>
  );
}

export default Search;
