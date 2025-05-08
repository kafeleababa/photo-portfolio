import React from "react";

import Header from "./Header";
import AlbumCard from "./AlbumCard";

function Home({ albums }) {
  return (
    <div className="home">
      <Header />
      
      <h2 className="home-blurb">
        Explore my work from around the world.
      </h2>

      <div className="home-grid">
        {albums.map((album) => (
          <AlbumCard key={album.name} name={album.name} path={album.path} />
        ))}
      </div>
    </div>
  );
}

export default Home;
