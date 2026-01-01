// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
    site: 'https://clubcolak.be', // J'ai mis ton URL probable
    output: 'server', // Active le mode dynamique (SSR)
    adapter: vercel({
        webAnalytics: { enabled: true }
    }),
    integrations: [mdx(), sitemap()],
});