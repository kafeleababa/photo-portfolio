// Description: This component displays a lightbox for viewing images in a gallery.
import React, { useState, useEffect } from "react";
import Exifr from "exifr";

function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  // State to hold EXIF data
  const [exifData, setExifData] = useState(null);
  // Fetch EXIF data when the current image changes
  useEffect(() => {
    const fetchExifData = async () => {
      const image = images[currentIndex];
      if (image) {
        try {
          const data = await Exifr.parse(image.src);
          setExifData(data);
        } catch (error) {
          console.error("Error fetching EXIF data:", error);
        }
      }
    };
    fetchExifData();
  }, [images, currentIndex]);

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

        {/* Display EXIF data if available */}
        {/* {exifData && (
          <div className="exif-data-container">
            <div className="exif-data">
              <p className="exif-title">Camera:</p>
              <p className="exif-value">
                {exifData.Make} {exifData.Model}
              </p>
            </div>
            <div className="exif-data">
              <p className="exif-title">Lens:</p>
              <p className="exif-value">{exifData.LensModel}</p>
            </div>
            <div className="exif-data">
              <p className="exif-title">Shutter Speed:</p>
              <p className="exif-value">
                1/{Math.round(1 / exifData.ExposureTime)} sec
              </p>
            </div>
            <div className="exif-data">
              <p className="exif-title">Apeture:</p>
              <p className="exif-value">F/{exifData.FNumber}</p>
            </div>
            <div className="exif-data">
              <p className="exif-title">ISO:</p>
              <p className="exif-value">{exifData.ISO}</p>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default Lightbox;
