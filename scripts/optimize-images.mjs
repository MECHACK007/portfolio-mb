// Compresses every PNG/JPG in public/images into a WebP next to it.
// Usage: npm run images:optimize   (add --force to re-encode everything)
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("public/images");
const MAX_WIDTH = 1920;
const force = process.argv.includes("--force");

async function* walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (/\.(png|jpe?g)$/i.test(entry.name)) yield full;
  }
}

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;
let before = 0;
let after = 0;

for await (const file of walk(ROOT)) {
  const target = file.replace(/\.(png|jpe?g)$/i, ".webp");
  const source = await fs.stat(file);

  if (!force) {
    const existing = await fs.stat(target).catch(() => null);
    if (existing && existing.mtimeMs >= source.mtimeMs) {
      console.log(`skip  ${path.relative(ROOT, target)} (à jour)`);
      continue;
    }
  }

  const info = await sharp(file)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 80, alphaQuality: 90, effort: 6, smartSubsample: true })
    .toFile(target);

  before += source.size;
  after += info.size;
  console.log(
    `${path.relative(ROOT, file).padEnd(34)} ${kb(source.size).padStart(8)} → ${kb(info.size).padStart(7)}  (${info.width}×${info.height})`
  );
}

if (before > 0) {
  console.log(`\nTotal : ${kb(before)} → ${kb(after)} (-${Math.round((1 - after / before) * 100)} %)`);
}
