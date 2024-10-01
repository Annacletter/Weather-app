// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';          // Import the Home page component
import LandingPage from './components/LandingPage';  // Import the LandingPage component

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<LandingPage>} />
      <Route path="/Check weather status" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
