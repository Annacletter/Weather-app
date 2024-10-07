import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import About from './pages/About';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/check-weather-status" element={<Home />} />
      <Route path="/about" element={<About />} />
 }
      {/* Add other routes as needed */}
    </Routes>
  </Router>
);

export default App;

