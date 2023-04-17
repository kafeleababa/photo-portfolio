import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className='app'>
      <div className='header'>
        <Link to="/">
          <h1 className='header-title'>Kafele A</h1>
        </Link>
      </div>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>

    </div>
    );
}

export default App;