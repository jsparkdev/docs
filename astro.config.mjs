import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'My Docs',
      social: {
        github: 'https://github.com/jsparkdev',
        'x.com': 'https://x.com/jsparkdev',
        linkedin: 'https://www.linkedin.com/in/jsparkdev/?locale=en_US',
      },
      sidebar: [
        {
          label: 'Posts',
          autogenerate: { directory: 'posts' },
        },
      ],
    }),
  ],
});
