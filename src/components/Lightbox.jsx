// Description: This component displays a lightbox for viewing images in a gallery.
import React, { useEffect } from "react";
import Exifr from "exifr";
import "../styling/Lightbox.scss";

function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  // Handle keyboard navigation
  // Close lightbox on Escape key, navigate left/right with arrow keys
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
        <button className="lightbox-close" onClick={onClose}>
          ×
        </button>
        <button className="lightbox-prev" onClick={onPrev}>
          ‹
        </button>
        <button className="lightbox-next" onClick={onNext}>
          ›
        </button>
      </div>
    </div>
  );
}

export default Lightbox;
