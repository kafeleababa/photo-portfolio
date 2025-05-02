import "../styling/App.scss"
import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import Home from "./Home";
import Album from "./Album";
import Contact from "./Contact";
import About from "./About";
import Header from "./Header";

const albums = [
  { name: "Switzerland", path: "/switzerland" },
  { name: "Amsterdam", path: "/amsterdam" },
  { name: "Paris", path: "/paris" },
  { name: "Murcia", path: "/murcia" },
  // { name: "Split", path: "/split" },
  // { name: "Mallorca", path: "/mallorca" },
];

function App() {
  return (
    <div className="app">

      <Routes>
        <Route path="/" element={<Home albums={albums} />} />
        <Route path="/:albumName" element={<Album />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {albums.map((album) => (
          <Route
            key={album.name}
            path={album.path}
            element={<Album albumName={album.name} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
