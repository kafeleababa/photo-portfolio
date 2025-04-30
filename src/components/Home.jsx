import React from "react";
import { Link } from "react-router-dom";
import AlbumCard from "./AlbumCard";

function Home({ albums }) {
  return (
    <div className="home">
      <div className="header">
        <Link to="/">
          <h1 className="header-title">K A Studios</h1>
        </Link>
        <nav className="header-items">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>

      <h2>
        Explore my photography collections from various places around the world.
      </h2>

      <div className="album-grid">
        {albums.map((album) => (
          <AlbumCard key={album.name} name={album.name} path={album.path} />
        ))}
      </div>
    </div>
  );
}

export default Home;
