import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';

import node from '@astrojs/node';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',

  integrations: [mdx({
    extendMarkdownConfig: false,
  }), sitemap(), vue(), db()],

  output: "static",
  experimental: {
    session: true,
  },


  adapter: node({
    mode: 'standalone',
  }),
  server: {
    port: process.env.PORT || 3000
  }

});