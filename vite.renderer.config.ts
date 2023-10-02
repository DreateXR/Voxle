import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@config": path.resolve(__dirname, "config"),
      "@renderer": path.resolve(__dirname, "src/renderer"),
      "@components": path.resolve(__dirname, "src/renderer/components"),
      "@lib": path.resolve(__dirname, "src/renderer/lib"),
      "@styles": path.resolve(__dirname, "src/renderer/styles"),
      "@store": path.resolve(__dirname, "src/renderer/store"),
      "@views": path.resolve(__dirname, "src/renderer/views"),
    },
  },
});
