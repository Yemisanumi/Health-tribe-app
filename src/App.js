import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import PageScreens from './Pages/PageScreens';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={< PageScreens />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;