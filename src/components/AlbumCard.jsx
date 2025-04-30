import React from "react";
import { Link } from "react-router-dom";

function AlbumCard({ name, path }) {
  const imageUrl = `/photo-portfolio/albums/${name}/cover.jpg`;

  return (
    <Link to={path} className="album-card">
      <div className="album-thumbnail">
        <img src={imageUrl} alt={`${name} cover`} />
      </div>
      <h3>{name}</h3>
    </Link>
  );
}

export default AlbumCard;
