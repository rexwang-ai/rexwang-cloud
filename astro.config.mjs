import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  site: 'https://rexwang.cloud',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
  },
});
