// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'static'
  },
  //Deploy normal project
  base: '/project-1032/',
  site: 'https://20essentials.github.io/project-1032/'

  //Localhost
  // site: 'http://localhost:4321/'
});
