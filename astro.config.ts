// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
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
			sidebar: [
				{
					label: '가이드',
					autogenerate: { directory: 'guides' },
				},
			],
		}),
	],
});
