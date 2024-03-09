import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.jspark.dev',
  integrations: [
    starlight({
      title: 'Docs',
      description: '나를 위한 문서',
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
      locales: {
        root: {
          label: '한국어',
          lang: 'ko-KR',
        }},
        lastUpdated: true,
        pagination: false
    }),
  ],
});
