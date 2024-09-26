import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';          // Import Home page
import LandingPage from './components/LandingPage';  // Import Landing page

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page at the root */}
        <Route path="/" element={<LandingPage />} />

        {/* Home page accessible at '/home' */}
        <Route path="/home" element={<Home />} />

        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
