import React from "react";
import { Link } from "react-router-dom";

function AlbumCard({ name, path }) {  
  const imageUrl = `/photo-portfolio/albums/${name}/cover.jpg`;

  return (
    <Link to={path} className="thumbnail-card">
      <div className="thumbnail-image">
        <img src={imageUrl} alt={`${name} cover`} />
      </div>
      <h3 className="thumbnail-title">{name}</h3>
    </Link>
  );
}

export default AlbumCard;
