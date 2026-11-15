import { defineConfig } from "astro/config";

import alpinejs from "@astrojs/alpinejs";
import swup from '@swup/astro';


import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
  site: "https://astro-spruce-blog.netlify.app",
  integrations: [alpinejs(), swup(), sitemap()]
});