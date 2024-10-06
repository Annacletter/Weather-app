import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/check-weather-status" element={<Home />} />  {/* Correct path */}
      {/* Add other routes as needed */}
    </Routes>
  </Router>
);

export default App;

