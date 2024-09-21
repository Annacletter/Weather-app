import React, { useEffect, useState } from 'react';
import WeatherForm from '../components/WeatherForm';
import WeatherDisplay from '../components/WeatherDisplay';
import mockData from '../mockData.json';

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch posts from JSONPlaceholder
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setPosts(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to search for weather data based on city name
  const searchWeather = (cityName) => {
    const cityWeather = mockData.weatherData.find(
      (weather) => weather.city.toLowerCase() === cityName.toLowerCase()
    );
    setWeather(cityWeather);
  };

  // Loading and error handling for fetching posts
  if (loading) return <div>Loading posts...</div>;
  if (error) return <div>Error fetching posts: {error.message}</div>;

  return (
    <div className="container">
      <h1 className="my-4">Weather App</h1>
      <WeatherForm onSearch={searchWeather} />
      <WeatherDisplay weather={weather} />
      <h2 className="my-4">Posts from JSONPlaceholder</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

