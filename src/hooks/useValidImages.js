import { useEffect, useState } from "react";

function useValidImages(albumName, count = 100, basePath) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadedImages = [];
    let isMounted = true; // Flag to prevent state updates on unmounted components

    // Ensure basePath is provided
    if (!basePath) {
      console.error("useValidImages: basePath is required.");
      return;
    }

    // Check if an image path is valid
    const checkImage = (src, alt, targetIndex) => {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        if (!isMounted) return;
        loadedImages.push({
          index: targetIndex, // Keep track of original index
          thumbSrc: `${basePath}/${albumName}/image${targetIndex}_thumb.webp`,
          mediumSrc: `${basePath}/${albumName}/image${targetIndex}_medium.webp`,
          fullSrc: `${basePath}/${albumName}/image${targetIndex}_full.jpg`,
          alt: alt,
        });
        loadedImages.sort((a, b) => a.index - b.index);
        setImages([...loadedImages]);
      };

      img.onerror = () => {
        if (!isMounted) return;
        console.warn(`Image failed to load: ${src}`); // Optional: log failed images
      };
    };

    for (let i = 1; i <= count; i++) {
      const initialSrc = `${basePath}/${albumName}/image${i}_thumb.webp`;
      checkImage(initialSrc, `Image ${i} from ${albumName}`, i);
    }

    return () => {
      isMounted = false; // Cleanup on unmount
    };
  }, [albumName, count, basePath]);

  return images;
}

export default useValidImages;
