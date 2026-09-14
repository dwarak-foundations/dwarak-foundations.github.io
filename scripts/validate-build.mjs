import { access, readdir, readFile } from "node:fs/promises";
import { dirname, extname, join, normalize } from "node:path";

const root = new URL("../", import.meta.url).pathname;
const output = join(root, "dist");
const htmlFiles = [];

async function collectHtml(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await collectHtml(path);
    if (entry.isFile() && entry.name.endsWith(".html")) htmlFiles.push(path);
  }
}

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

await collectHtml(output);
const failures = [];
const forbidden = [/themesberg/i, /demo\.themesberg\.com/i, /href=["']#["']/i];

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  for (const pattern of forbidden) {
    if (pattern.test(html)) failures.push(`${file}: contains forbidden legacy content (${pattern})`);
  }

  for (const match of html.matchAll(/(?:href|src)=["']([^"']+)["']/g)) {
    const value = match[1];
    if (/^(?:https?:|mailto:|tel:|data:|#)/.test(value) || value === "/api/events") continue;

    const clean = value.split(/[?#]/)[0];
    const candidate = clean.startsWith("/")
      ? join(output, clean)
      : normalize(join(dirname(file), clean));
    const target = extname(candidate) ? candidate : join(candidate, "index.html");
    if (!(await exists(target))) failures.push(`${file}: missing local target ${value}`);
  }
}

if (htmlFiles.length !== 15) failures.push(`Expected 15 generated HTML pages, found ${htmlFiles.length}`);

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validated ${htmlFiles.length} HTML pages and their local links.`);
}
