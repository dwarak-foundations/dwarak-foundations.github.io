import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(import.meta.dirname),
  publicDir: resolve(import.meta.dirname, "public"),
  build: {
    outDir: resolve(import.meta.dirname, "../admin-dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        dashboard: resolve(import.meta.dirname, "index.html"),
        content: resolve(import.meta.dirname, "content/index.html"),
      },
    },
  },
});
