import React from "react";
import { useParams } from "react-router-dom";

function Album() {
  const { albumName } = useParams();

  const images = Array.from({ length: 10 }, (_, i) =>
  `/photo-portfolio/albums/${albumName}/image${i + 1}.jpg`
  );
  // const images = [
  //   {
  //     src: `src/albums/${albumName.toLowerCase()}/Amsterdam_001.jpg`,
  //     alt: `${albumName} Image 1`,
  //   },
  // ];

  return (
    <div className="album">
      <h2>{albumName} Gallery</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
}

export default Album;
