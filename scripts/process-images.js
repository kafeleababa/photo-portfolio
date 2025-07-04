import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const inputDir = "./original_albums";
const outputDir = "./public/albums";

async function processImage(imagePath, albumName, filename) {
  const baseName = path.parse(filename).name;

  await fs.mkdir(path.join(outputDir, albumName), { recursive: true });

  await sharp(imagePath)
    .resize(400)
    .jpeg({ quality: 80 })
    .toFile(path.join(outputDir, albumName, `${baseName}_thumb.jpg`));

  await sharp(imagePath)
    .resize(1200)
    .jpeg({ quality: 75 })
    .toFile(path.join(outputDir, albumName, `${baseName}_medium.jpg`));

  await sharp(imagePath)
    .jpeg({
      quality: 100,
    })
    .toFile(path.join(outputDir, albumName, `${baseName}_full.jpg`));
}

async function processAlbums() {
  const albums = await fs.readdir(inputDir, { withFileTypes: true });
  for (const album of albums) {
    if (album.isDirectory()) {
      const albumPath = path.join(inputDir, album.name);
      const images = await fs.readdir(albumPath);

      for (const image of images) {
        if (image.match(/\.(jpg|jpeg|png)$/i)) {
          await processImage(path.join(albumPath, image), album.name, image);
        }
      }
    }
  }
  console.log("Image processing complete!");
}

processAlbums().catch(console.error);
