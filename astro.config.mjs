import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions'; // o '@astrojs/netlify/edge'

export default defineConfig({
  output: 'server', // Necesario para usar funciones/edge en Netlify
  adapter: netlify(),
});
