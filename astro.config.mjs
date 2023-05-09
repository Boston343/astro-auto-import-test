import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import AutoImport from "astro-auto-import";
// import HeaderLink from '../../components/HeaderLink.astro';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    AutoImport({
      imports: ["../../components/HeaderLink.astro"],
    }),
    mdx(),
    sitemap(),
  ],
});
