// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';          // Import the Home page component
import LandingPage from './components/LandingPage';  // Import the LandingPage component
import Contact from './components/Contact';  // Assuming you have a Contact component
import Navbar from './components/Navbar';  // Assuming you have a Navbar component

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />  {/* Fixing the missing closing tag */}
      <Route path="/Home" element={<Home />} />
      <Route path="/Check-weather-status" element={<Home />} />  {/* Fixed the route path name */}
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
