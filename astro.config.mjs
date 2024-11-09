// @ts-check
import { defineConfig } from 'astro/config';
import deno from '@deno/astro-adapter';
import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: deno(),
  integrations: [react(), tailwind()],
  image: {
    domains: ['picsum.photos'],
  }
}
);