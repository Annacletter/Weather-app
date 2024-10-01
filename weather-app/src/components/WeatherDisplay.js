import React from 'react';
import { WiDaySunny, WiRain, WiSnow } from 'react-icons/wi'; // Import icons
import '../style.css';

const WeatherDisplay = ({ weather }) => {
  if (!weather) return <p>No weather data available</p>;

  let weatherIcon;
  switch (weather.description) {
    case 'Clear':
      weatherIcon = <WiDaySunny size={50} />;
      break;
    case 'Rain':
      weatherIcon = <WiRain size={50} />;
      break;
    case 'Snow':
      weatherIcon = <WiSnow size={50} />;
      break;
    default:
      weatherIcon = <WiDaySunny size={50} />;
  }

  return (
    <div className="weather-card">
      <h2>{weather.city}</h2>
      {weatherIcon}
      <p>{weather.description}</p>
      <h3>{weather.temperature} °C</h3>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.wind_speed} km/h</p>
    </div>
  );
};

export default WeatherDisplay;
