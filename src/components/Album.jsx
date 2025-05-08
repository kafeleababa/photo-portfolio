import React, { useState } from "react";
import Header from "./Header";
import Lightbox from "./Lightbox";
import useValidImages from "../hooks/useValidImages.js";

function Album({ albumName }) {
  const images = useValidImages(albumName, 100); // Up to 100 valid images
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <div className="album">
      <Header />
      <h2 className="album-name">{albumName}</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => setLightboxIndex(index)}
          />
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((prev) =>
              prev > 0 ? prev - 1 : images.length - 1
            )
          }
          onNext={() =>
            setLightboxIndex((prev) =>
              prev < images.length - 1 ? prev + 1 : 0
            )
          }
        />
      )}
    </div>
  );
}

export default Album;
