import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://docs.jspark.dev",
  integrations: [
    starlight({
      title: "Docs",
      pagination: false,
      sidebar: [
        { label: "팁", link: "/tips" },
        { label: "안드로이드 개발 자료", link: "/android" },
      ],
    }),
  ],
});
