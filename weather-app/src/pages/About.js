// src/pages/About.js
import React, { useState, useEffect } from 'react';
import './style.css'; // You can add your custom styles

const About = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Fetch different weather information (you can modify the endpoint for different mock data)
    fetch('https://jsonplaceholder.typicode.com/posts/2') // Example endpoint for mock data
      .then(response => response.json())
      .then(data => {
        setWeatherData({
          title: "Weather Overview",
          temperature: "22°C",
          condition: "Partly Cloudy",
          wind: "12 km/h NW",
          description: "The weather is expected to be partly cloudy with occasional sunshine throughout the day."
        });
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }, []);

  return (
    <div className="about-container">
      <h1>About the Weather</h1>
      {weatherData ? (
        <div className="weather-overview">
          <h2>{weatherData.title}</h2>
          <p><strong>Temperature:</strong> {weatherData.temperature}</p>
          <p><strong>Condition:</strong> {weatherData.condition}</p>
          <p><strong>Wind:</strong> {weatherData.wind}</p>
          <p>{weatherData.description}</p>
        </div>
      ) : (
        <p>Loading weather overview...</p>
      )}
    </div>
  );
};

export default About;

