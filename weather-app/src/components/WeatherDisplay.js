import React from 'react';

const WeatherDisplay = ({ weather }) => {
  if (!weather) return <p>No weather data available</p>;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{weather.city}</h5>
        <p className="card-text">Temperature: {weather.temperature}</p>
        <p className="card-text">Description: {weather.description}</p>
        <p className="card-text">Humidity: {weather.humidity}</p>
        <p className="card-text">Wind Speed: {weather.wind_speed}</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
