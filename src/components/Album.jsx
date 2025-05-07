import React, { useState } from "react";
import Header from "./Header";
import "../styling/App.scss";

function Album({ albumName }) {
  const [visibleImages, setVisibleImages] = useState(
    Array.from({ length: 100 }, (_, i) => ({
      src: `/photo-portfolio/albums/${albumName}/image${i + 1}.jpg`,
      alt: `Image ${i + 1} from ${albumName}`,
      index: i + 1,
    }))
  );

  const handleImageError = (failedIndex) => {
    // Remove all images from the first failed image onward
    setVisibleImages((prev) => prev.filter((img) => img.index < failedIndex));
  };

  return (
    <div className="album">
      <Header />
      <h2>{albumName}</h2>
      <div className="gallery">
        {visibleImages.map((image) => (
          <img
            key={image.index}
            src={image.src}
            alt={image.alt}
            onError={() => handleImageError(image.index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Album;
