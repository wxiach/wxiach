import tailwindcss from "@tailwindcss/vite";
import { defineConfig, passthroughImageService } from "astro/config";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    service: passthroughImageService(),
  },
});
