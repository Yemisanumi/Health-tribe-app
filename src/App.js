import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import PageScreens from './Pages/PageScreens';
import PageScreentwo from './Pages/PageScreentwo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={< PageScreens />} />
          <Route path="/pagetwo" element={< PageScreentwo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;