const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const sizes = [192, 512];
const sourceDir = path.join(__dirname, "../public");
const outputDir = sourceDir;

async function generateMaskableIcons() {
  for (const size of sizes) {
    const sourceFile = path.join(sourceDir, `logo${size}.png`);
    const maskableFile = path.join(outputDir, `logo${size}-maskable.png`);

    // Create a square canvas with padding for maskable icon
    const padding = Math.floor(size * 0.1); // 10% padding
    const innerSize = size - padding * 2;

    try {
      // Resize the original logo to fit within the safe area
      await sharp(sourceFile)
        .resize(innerSize, innerSize, {
          fit: "contain",
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .extend({
          top: padding,
          bottom: padding,
          left: padding,
          right: padding,
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .toFile(maskableFile);

      console.log(`Generated maskable icon: ${maskableFile}`);
    } catch (error) {
      console.error(`Error generating maskable icon for size ${size}:`, error);
    }
  }
}

generateMaskableIcons().catch(console.error);
