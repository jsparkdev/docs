import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	site: "https://docs.jspark.dev",
	integrations: [
		starlight({
			logo: { dark: "./src/assets/favicon.svg", light: "./src/assets/favicon-black.svg" },
			title: "Docs",
			description: "나를 위한 문서",
			social: {
				github: "https://github.com/jsparkdev",
				"x.com": "https://x.com/jsparkdev",
				linkedin: "https://www.linkedin.com/in/jsparkdev",
			},
			sidebar: [
				{
					label: "Guides",
					autogenerate: { directory: "guides" },
				},
				{
					label: "References",
					autogenerate: { directory: "references" },
				},
			],
			locales: {
				root: {
					label: "한국어",
					lang: "ko-KR",
				},
			},
			lastUpdated: true,
			pagination: false,
		}),
	],
});
