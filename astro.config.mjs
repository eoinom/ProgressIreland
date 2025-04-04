import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    vue(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  output: 'static',
  server: { port: 8080 },
});
