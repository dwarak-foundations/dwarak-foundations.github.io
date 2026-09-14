import { cp, mkdir, readdir, rm } from "node:fs/promises";
import { dirname, extname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = new URL("../", import.meta.url);
const sourceRoot = new URL("assets/", root);
const outputRoot = new URL("public/", root);
const imageSource = new URL("img/", sourceRoot);
const imageOutput = new URL("img/", outputRoot);
const imageSourcePath = fileURLToPath(imageSource);
const imageOutputPath = fileURLToPath(imageOutput);
const excludedDirectories = new Set(["harmony"]);

await rm(outputRoot, { recursive: true, force: true });
await mkdir(imageOutput, { recursive: true });

for (const filename of ["_headers", "_redirects", "atlantis.pdf"]) {
  await cp(new URL(filename, sourceRoot), new URL(filename, outputRoot));
}

async function prepareDirectory(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const source = join(directory, entry.name);
    const relativePath = relative(imageSourcePath, source);
    const topLevelDirectory = relativePath.split(sep)[0];
    if (excludedDirectories.has(topLevelDirectory)) continue;

    const destination = join(imageOutputPath, relativePath);
    if (entry.isDirectory()) {
      await mkdir(destination, { recursive: true });
      await prepareDirectory(source);
      continue;
    }

    await mkdir(dirname(destination), { recursive: true });
    const extension = extname(entry.name).toLowerCase();
    if (extension === ".jpg" || extension === ".jpeg") {
      await sharp(source)
        .rotate()
        .resize({ width: 2000, height: 2000, fit: "inside", withoutEnlargement: true })
        .jpeg({ quality: 82, mozjpeg: true })
        .toFile(destination);
    } else {
      await cp(source, destination);
    }
  }
}

await prepareDirectory(imageSourcePath);
