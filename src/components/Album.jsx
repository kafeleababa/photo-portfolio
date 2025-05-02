import React from "react";
import { useParams } from "react-router-dom";

function Album() {
  const { albumName } = useParams();

  const basePath = import.meta.env.BASE_URL;
  const images = Array.from(
    { length: 10 },
    (_, i) => `${basePath}/albums/Switzerland/image${i + 1}.jpg`
  );
  console.log(images)

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
