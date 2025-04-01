import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://docs.jspark.dev",
  integrations: [
    starlight({
      title: "Docs",
      pagination: false,
      locales: {
        root: {
          label: "한국어",
          lang: "ko-KR",
        },
      },
      social: {
        github: "https://github.com/jsparkdev",
        "x.com": "https://x.com/jsparkdev",
        blueSky: "https://bsky.app/profile/jspark.dev",
      },
      sidebar: [
        { label: "팁", link: "/tips" },
        { label: "안드로이드 개발 자료", link: "/android" },
      ],
    }),
  ],
});
