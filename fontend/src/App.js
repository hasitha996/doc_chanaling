import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import { Home } from "./views/Home";
import { Doctor } from "./views/Doctor";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctor" element={<Doctor />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
