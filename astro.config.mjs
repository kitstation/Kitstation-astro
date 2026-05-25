import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://kitstation.pe",
  output: "server",
  adapter: vercel(),
  server: {
    host: true
  }
});
