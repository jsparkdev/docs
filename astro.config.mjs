import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: '가이드북',
      social: {
        github: 'https://github.com/jsparkdev',
        'x.com': 'https://x.com/jsparkdev',
        linkedin: 'https://www.linkedin.com/in/jsparkdev',
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
