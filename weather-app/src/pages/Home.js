import React, { useState } from 'react';
import WeatherForm from '../components/WeatherForm';
import WeatherDisplay from '../components/WeatherDisplay';
import mockData from '../mockData.json'; // Import your mock JSON data
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'; // Import updated styles

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [bgClass, setBgClass] = useState('');

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
    </div>
  );
};

export default Home;
