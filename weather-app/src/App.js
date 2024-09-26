// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';          // Import the Home page component
import LandingPage from './components/LandingPage';  // Import the LandingPage component

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page at the root */}
        <Route path="/" element={<LandingPage />} />

        {/* Home page accessible at '/home' */}
        <Route path="/home" element={<Home />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
