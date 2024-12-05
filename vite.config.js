import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ensure the resolution for slick-carousel is included
      "slick-carousel": "node_modules/slick-carousel",
    },
  },
});
