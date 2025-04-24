import starlight from '@astrojs/starlight'
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
      title: 'Docs',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/jsparkdev/docs' }],
      locales: {
        root: {
          label: '한국어',
          lang: 'ko-KR',
        },
      },
      sidebar,
    }),
  ],
})

function sidebarItem(label: string, directory: string) {
  return { label, autogenerate: { directory }, collapsed: true }
}
