const sharp = require("sharp");
const path = require("path");

const sourceDir = path.join(__dirname, "../public");
const outputFile = path.join(sourceDir, "og-image.jpg");

// Recommended size for Open Graph images
const width = 1200;
const height = 630;

async function generateOGImage() {
  try {
    // Use the cabin image as the base
    await sharp(path.join(sourceDir, "cabin.webp"))
      .resize(width, height, {
        fit: "cover",
        position: "center",
      })
      .jpeg({
        quality: 90,
        progressive: true,
      })
      .toFile(outputFile);

    console.log(`Generated Open Graph image: ${outputFile}`);
  } catch (error) {
    console.error("Error generating Open Graph image:", error);
  }
}

generateOGImage().catch(console.error);
