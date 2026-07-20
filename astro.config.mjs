import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://rexwang.cloud',
  image: {
    domains: ['images.unsplash.com'],
  },
  prefetch: true,
  output: 'static',
  integrations: [
    sitemap(),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
