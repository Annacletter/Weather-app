import React, { useState } from 'react';
import WeatherForm from '../components/WeatherForm';
import WeatherDisplay from '../components/WeatherDisplay';
import mockData from '../mockData.json';

const Home = () => {
  const [weather, setWeather] = useState(null);

  const searchWeather = (cityName) => {
    const cityWeather = mockData.weatherData.find(
      (weather) => weather.city.toLowerCase() === cityName.toLowerCase()
    );
    setWeather(cityWeather);
  };

  return (
    <div className="container">
      <h1 className="my-4">Weather App</h1>
      <WeatherForm onSearch={searchWeather} />
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default Home;
