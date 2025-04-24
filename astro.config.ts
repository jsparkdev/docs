import starlight from '@astrojs/starlight'
import catppuccin from '@catppuccin/starlight'
import { defineConfig } from 'astro/config'

const sidebar: ReturnType<typeof sidebarItem>[] = [
  sidebarItem('JavaScript', 'javascript'),
  sidebarItem('TypeScript', 'typescript'),
  sidebarItem('React', 'react'),
  sidebarItem('Node.js', 'nodejs'),
  sidebarItem('pnpm', 'pnpm'),
  sidebarItem('CI/CD', 'cicd'),
  sidebarItem('Astro', 'astro'),
  sidebarItem('Browser', 'browser'),
  sidebarItem('Cloudflare', 'cloudflare'),
  sidebarItem('Open Source Tools', 'tools'),
]

export default defineConfig({
  site: 'https://docs.jspark.dev',
  integrations: [
    starlight({
      title: '문서 모음',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/jsparkdev/docs' }],
      locales: {
        root: {
          label: '한국어',
          lang: 'ko-KR',
        },
      },
      sidebar,
      plugins: [catppuccin({
        light: { flavor: 'latte', accent: 'green' },
        dark: { flavor: 'mocha', accent: 'green' },
      })],
      pagination: false,
    }),
  ],
})

function sidebarItem(label: string, directory: string) {
  return { label, autogenerate: { directory }, collapsed: true }
}
