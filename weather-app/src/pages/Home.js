import React, { useState } from 'react';
import WeatherForm from '../components/WeatherForm';
import WeatherDisplay from '../components/WeatherDisplay';
import mockData from '../mockData.json'; // Import your mock JSON data
import { WiDaySunny, WiRain, WiSnow } from 'react-icons/wi'; // Weather icons
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

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
        setWeatherIcon(<WiDaySunny size={50} />);
        break;
      case 'Rain':
        setBgClass('rainy');
        setWeatherIcon(<WiRain size={50} />);
        break;
      case 'Snow':
        setBgClass('snowy');
        setWeatherIcon(<WiSnow size={50} />);
        break;
      default:
        setBgClass('');
        setWeatherIcon(null);
    }
  };

  return (
    <div className={`weather-app ${bgClass}`}>
      <WeatherForm onSearch={handleSearch} />
      <WeatherDisplay weather={weather} />
      {weatherIcon && <div className="weather-icon">{weatherIcon}</div>}
    </div>
  );
};

export default Home;
