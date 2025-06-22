import { useEffect, useState } from "react";

function useValidImages(
  albumName,
  count = 100,
  basePath = "/photo-portfolio/albums"
) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadedImages = [];
    let isMounted = true;

    for (let i = 1; i <= count; i++) {
      const src = `${basePath}/${albumName}/image${i}.jpg`;
      const img = new Image();
      img.src = src;

      img.onload = () => {
        if (!isMounted) return;
        loadedImages.push({ src, alt: `Image ${i} from ${albumName}` });
        setImages([...loadedImages]); // Update incrementally
      };
    }

    return () => {
      isMounted = false; // Cleanup if component unmounts
    };
  }, [albumName, count, basePath]);

  return images;
}

export default useValidImages;
