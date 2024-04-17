import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import PageScreens from './Pages/PageScreens';
import PageScreentwo from './Pages/PageScreentwo';
import PageScreenthree from './Pages/PageScreenthree';
import PageScreenfour from './Components/Registration/PageScreenfour';
import PageScreenfive from './Components/Register/PageScreenfive';
import PageScreensix from './Components/Verification/PageScreensix';
import PageScreen7 from './Components/SuccessfulModal/PageScreen7';
import PageScreen8 from './Components/Personal/PageScreen8';
import PageScreen9 from './Components/DoctorsNotice/PageScreen9';
import PageScreenten from './Components/Document/PageScreenten';
import TestifierSection from './Components/LandingPages/TestifierSection';
import Questions from './Components/Faq/Questions';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={< PageScreens />} />
          <Route path="/pagetwo" element={< PageScreentwo />} />
          <Route path="/pagethree" element={< PageScreenthree />} />
          <Route path="/pagefour" element={< PageScreenfour />} />
          <Route path="/pagefive" element={< PageScreenfive />} />
          <Route path="/pagesix" element={< PageScreensix />} />
          <Route path="/pageseven" element={< PageScreen7 />} />
          <Route path="/pageeight" element={< PageScreen8 />} />
          <Route path="/pagenine" element={< PageScreen9 />} />
          <Route path="/pageten" element={< PageScreenten />} />
          <Route path="/landingpage" element={< TestifierSection/>} />
          <Route path="/faq" element={< Questions/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;