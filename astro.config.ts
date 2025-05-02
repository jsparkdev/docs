import starlight from '@astrojs/starlight'
import catppuccin from '@catppuccin/starlight'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://docs.jspark.dev',
  integrations: [
    starlight({
      title: '문서',
      description: '웹 개발에 대한 경험과 지식을 공유합니다.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/jsparkdev/docs',
        },
      ],
      locales: {
        root: {
          label: '한국어',
          lang: 'ko-KR',
        },
      },
      sidebar: [
        'open-source-tools',
      ],
      plugins: [
        catppuccin({
          light: { flavor: 'latte', accent: 'green' },
          dark: { flavor: 'mocha', accent: 'green' },
        }),
      ],
      pagination: false,
      customCss: ['./src/styles/font.css'],
    }),
  ],
})
