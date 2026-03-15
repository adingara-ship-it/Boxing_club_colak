import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const rootDir = new URL("..", import.meta.url);
const publicDir = new URL("../public/", import.meta.url);
const outputDir = new URL("../public/optimized/", import.meta.url);

const widthFor = (fileName) => {
  if (fileName === "logo.png") return 260;
  if (fileName === "hero-boxe.jpg") return 1600;
  if (fileName.startsWith("whatsapp")) return 900;
  return 720;
};

const shouldOptimize = (fileName) => {
  const lower = fileName.toLowerCase();

  if (lower.startsWith("favicon")) return false;
  if (lower.includes("/optimized/")) return false;

  return /\.(png|jpe?g)$/i.test(fileName);
};

const walk = async (dirUrl, relativeDir = "") => {
  const entries = await readdir(dirUrl, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const nextRelative = path.posix.join(relativeDir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === "fonts" || entry.name === "optimized") continue;
      files.push(...(await walk(new URL(`${entry.name}/`, dirUrl), nextRelative)));
    } else if (shouldOptimize(nextRelative)) {
      files.push(nextRelative);
    }
  }

  return files;
};

const files = await walk(publicDir);

await mkdir(outputDir, { recursive: true });

for (const relativeFile of files) {
  const sourceUrl = new URL(relativeFile, publicDir);
  const outputName = `${relativeFile.replace(/\.[^.]+$/, "")}.webp`;
  const outputUrl = new URL(outputName, outputDir);
  const outputFolder = new URL(`${path.posix.dirname(outputName)}/`, outputDir);

  await mkdir(outputFolder, { recursive: true });

  const width = widthFor(path.posix.basename(relativeFile));

  await sharp(fileURLToPath(sourceUrl))
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(fileURLToPath(outputUrl));

  console.log(`optimized ${relativeFile} -> public/optimized/${outputName}`);
}
