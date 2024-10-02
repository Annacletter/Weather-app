import React from 'react';
import { WiDaySunny, WiRain, WiSnow } from 'react-icons/wi'; // Import icons
import { Link } from 'react-router-dom'; // Ensure Link is imported from react-router-dom
import Navbar from './components/Navbar.js'; // Correct relative path
import '../style.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Weather Report Hub</h1>
      <p>
        Stay informed with the latest weather updates from major cities across the United States. Whether you're in the bustling streets of New York, the sunny beaches of Los Angeles, or the windy city of Chicago, we've got you covered.
      </p>

      <div className="city-weather-container">
        {/* City 1: New York */}
        <div className="weather-card">
          <h2>New York</h2>
          <WiRain size={50} /> {/* Icon for rain */}
          <p>
            The city that never sleeps is waking up to a rainy day. New York's iconic skyline is cloaked in mist, with raindrops creating a rhythmic beat on the busy streets below. Don't forget your raincoat and umbrella!
          </p>
          <h3>18°C</h3>
          <p>Humidity: 85%</p>
          <p>Wind Speed: 14 km/h</p>
        </div>

        {/* City 2: Los Angeles */}
        <div className="weather-card">
          <h2>Los Angeles</h2>
          <WiDaySunny size={50} /> {/* Icon for sunny */}
          <p>
            It's another beautiful, sunny day in Los Angeles. With the sun shining bright over palm-lined streets and the Pacific coastline, it’s a perfect day for beachgoers and outdoor enthusiasts alike.
          </p>
          <h3>28°C</h3>
          <p>Humidity: 40%</p>
          <p>Wind Speed: 8 km/h</p>
        </div>

        {/* City 3: Chicago */}
        <div className="weather-card">
          <h2>Chicago</h2>
          <WiSnow size={50} /> {/* Icon for snow */}
          <p>
            The Windy City is wrapped in a layer of snow today, with brisk winds sweeping through the streets. Chicago's towering skyscrapers stand tall against the snowy backdrop, making for a picturesque winter scene.
          </p>
          <h3>-3°C</h3>
          <p>Humidity: 70%</p>
          <p>Wind Speed: 25 km/h</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

