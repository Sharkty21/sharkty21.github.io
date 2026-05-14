import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

function normalizeBase(raw: string | undefined): string {
  if (!raw || raw === "/" || raw === ".") {
    return "/";
  }
  const withLeading = raw.startsWith("/") ? raw : `/${raw}`;
  return withLeading.endsWith("/") ? withLeading : `${withLeading}/`;
}

const port = Number(process.env.PORT || "5173");
const basePath = normalizeBase(process.env.BASE_PATH);

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "public/assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port: Number.isFinite(port) && port > 0 ? port : 5173,
    strictPort: false,
    host: "0.0.0.0",
  },
  preview: {
    port: Number.isFinite(port) && port > 0 ? port : 4173,
    host: "0.0.0.0",
  },
});
