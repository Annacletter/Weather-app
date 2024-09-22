import React, { useState } from 'react';
import WeatherForm from '../components/WeatherForm';
import WeatherDisplay from '../components/WeatherDisplay';
import mockData from '../mockData.json'; // Import your mock JSON data
import { WiDaySunny, WiRain, WiSnow } from 'react-icons/wi'; // Weather icons
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [bgClass, setBgClass] = useState('');
  const [weatherIcon, setWeatherIcon] = useState(null); // To store the selected icon

  const handleSearch = (city) => {
    const mockedWeather = mockData[city] || {
      city: city,
      temperature: Math.floor(Math.random() * 30) + 15,
      description: 'Clear',
      humidity: 50, 
      wind_speed: 10,
      main: 'Clear',
    };

    setWeather(mockedWeather);

    // Set background class and weather icon based on the weather condition
    switch (mockedWeather.main) {
      case 'Clear':
        setBgClass('sunny');
        setWeatherIcon(<WiDaySunny size={50} />); // Set the sunny icon
        break;
      case 'Rain':
        setBgClass('rainy');
        setWeatherIcon(<WiRain size={50} />); // Set the rain icon
        break;
      case 'Snow':
        setBgClass('snowy');
        setWeatherIcon(<WiSnow size={50} />); // Set the snow icon
        break;
      default: 
        setBgClass('');
        setWeatherIcon(null); // Reset the icon if the weather condition doesn't match
    }
  };

  return (
    <div className={`weather-app ${bgClass}`}>
      <WeatherForm onSearch={handleSearch} />
      <WeatherDisplay weather={weather} />
      {weatherIcon && <div className="weather-icon">{weatherIcon}</div>} {/* Display the weather icon */}
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
          background-image: url('https://raw.githubusercontent.com/Annacletter/Weather-app/master/weather-app/src/assets/sunny.jpg');
        }

        .rainy {
          background-image: url('https://raw.githubusercontent.com/Annacletter/Weather-app/master/weather-app/src/assets/rainy.jpg');
        }

        .snowy {
          background-image: url('https://raw.githubusercontent.com/Annacletter/Weather-app/master/weather-app/src/assets/snowy.jpg');
        }
      
       .weather-icon {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default Home;

