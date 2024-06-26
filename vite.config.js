import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig((config) =>({
  base: config.command === 'build' ? '/taiwan_bus' : '/',
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      {
        find: /^~(.*)$/,
        replacement: "$1",
      },
    ],
  },
  server: {
    port: 1473
  }
}));
