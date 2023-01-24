import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.astro-start.netlify.com",
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    format: "file",
  },
});
