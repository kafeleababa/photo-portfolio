import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Switzerland from './albums/Switzerland/Switzerland';
import Amsterdam from './albums/Amsterdam/Amsterdam';
import Paris from './albums/Paris/Paris';
import Murcia from './albums/Murcia/Murcia';
import Split from './albums/Split/Split';
import Mallorca from './albums/Mallorca/Mallorca';

function App() {
  return (
    <div className='app'>
      <div className='header'>
        <Link to="/">
          <h1 className='header-title'>K A Studios</h1>
        </Link>
      </div>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/switzerland" element={<Switzerland />}></Route>
            <Route path="/amsterdam" element={<Amsterdam />}></Route>
            <Route path="/paris" element={<Paris />}></Route>
            <Route path="/murcia" element={<Murcia />}></Route>
            <Route path="/split" element={<Split />}></Route>
            <Route path="/mallorca" element={<Mallorca />}></Route>
          </Routes>

    </div>
    );
}

export default App;
