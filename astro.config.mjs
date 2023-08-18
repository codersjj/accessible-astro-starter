import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
  // Deploy your Astro Site to GitHub Pages: https://docs.astro.build/en/guides/deploy/github/#:~:text=Set%20the%20site%20and%2C%20if%20needed%2C%20base%20options%20in%20astro.config.mjs.
  site: 'https://codersjj.github.io',

  compressHTML: true,
  integrations: [mdx(), tailwind(), compress()],
})
