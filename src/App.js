import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import AboutUsHome from './Page/AboutUs/AboutUsHome/AboutUsHome';
import Home from './Page/Home/Home/Home';
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUsHome />} />
          
            </Routes>
        </Router>
      
    </div>
  );
}

export default App;
