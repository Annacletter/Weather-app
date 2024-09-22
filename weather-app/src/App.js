import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        {/* Use element and pass the component like this */}
        <Route path="/" element={<Home />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
