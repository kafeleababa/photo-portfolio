import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
        <div className="app">
          <div>
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
          </div>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
      </div>
    );
}

export default App;
