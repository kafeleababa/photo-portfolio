import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Lightbox from "./Lightbox";
import useValidImages from "../hooks/useValidImages.js";
import Spinner from "./Spinner.jsx";
import "../styling/Album.scss";

function Album({ albumName }) {
  const [loading, setLoading] = useState(true); // Initially set loading to true

  const albumImagesBasePath = `${import.meta.env.BASE_URL}albums`;
  const images = useValidImages(albumName, 100, albumImagesBasePath); // Up to 100 valid images

  const [lightboxIndex, setLightboxIndex] = useState(null); // Initially no lightbox open

  useEffect(() => {
    if (images.length > 0) {
      setLoading(false);
    }
  }, [images]);

  return (
    <div className="album-page">
      <Header />

      <div className="album-header">
        <Link to="/">
          <p className="back-button">←</p>
        </Link>

        <h2 className="album-name">{albumName}</h2>
      </div>

      {loading && <Spinner />}

      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={image.index}
            src={image.thumbSrc}
            alt={image.alt}
            onClick={() => setLightboxIndex(index)}
            loading="lazy"
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
