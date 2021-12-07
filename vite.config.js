import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/board-games/",

  server: {
    port: 42001,
  },

  build: {
    rollupOptions: {
      output: {
        // https://github.com/facebook/regenerator/issues/378
        intro: "window.regeneratorRuntime = undefined;",
      },
    },
  },

  plugins: [react()],
});
