import React, { useState } from 'react';
import WeatherForm from '../components/WeatherForm';
import WeatherDisplay from '../components/WeatherDisplay';
import mockWeatherData from '../mockData.json'; // Import JsonPlaceholder

function Home() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = (city) => {
    // Simulate fetching weather data using the mock data
    const weatherData = {
      ...mockWeatherData, // Spread the mock data
      city, // Update the city
    };

    setWeather(weatherData);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherForm onSearch={fetchWeather} />
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default Home;
