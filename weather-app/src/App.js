import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// Import other pages/components if you plan to add more routes

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

