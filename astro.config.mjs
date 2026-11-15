import { defineConfig } from "astro/config";

import alpinejs from "@astrojs/alpinejs";
import swup from '@swup/astro';


// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs(), swup()]
});