import React, { useState } from 'react';
import WeatherForm from '../components/WeatherForm';
import WeatherDisplay from '../components/WeatherDisplay';
import mockData from '../mockData.json'; // Import your mock JSON data
import { WiDaySunny, WiRain, WiSnow } from 'react-icons/wi';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'; // Import your CSS file
import sunnyImage from '../assets/sunny.jpg';
import rainyImage from '../assets/rainy.jpg';
import snowyImage from '../assets/snowy.jpg';

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [bgClass, setBgClass] = useState('');

  const handleSearch = (city) => {
    // Using the imported mock data
    const mockedWeather = mockData[city] || {
      city: city,
      temperature: Math.floor(Math.random() * 30) + 15, // Default mock temperature
      description: 'Clear', // Default description
      humidity: 50, // Default humidity
      wind_speed: 10, // Default wind speed
      main: 'Clear', // Default weather condition
    };

    setWeather(mockedWeather);

    // Set background class based on the weather condition
    switch (mockedWeather.main) {
      case 'Clear':
        setBgClass('sunny');
        break;
      case 'Rain':
        setBgClass('rainy');
        break;
      case 'Snow':
        setBgClass('snowy');
        break;
      default:
        setBgClass('');
    }
  };

  return (
    <div className={`weather-app ${bgClass}`}>
      <WeatherForm onSearch={handleSearch} />
      <WeatherDisplay weather={weather} />
      <style>{`
        .weather-app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: background 0.5s ease;
        }

        .sunny {
          background-image: url('path/to/sunny.jpg');
        }

        .rainy {
          background-image: url('path/to/rainy.jpg');
        }

        .snowy {
          background-image: url('path/to/snowy.jpg');
        }
      `}</style>
    </div>
  );
};

export default Home;
