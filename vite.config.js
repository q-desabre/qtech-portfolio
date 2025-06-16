import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@animations": path.resolve(__dirname, "./src/animations"),
      "@sections": path.resolve(__dirname, "./src/components/sections"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  // Use different base URLs for dev and production
  base: "./",
}));
