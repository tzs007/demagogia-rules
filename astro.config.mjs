// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  image: {
    service: { entrypoint: 'astro/assets/services/noop' }
  },
  integrations: [
    starlight({
      title: "Demagógia: Krumplisztáni Krónikák",
      social: [
        /* {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        }, */
      ],
      sidebar: [
        {
          label: "Yolo",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Demo",
          autogenerate: { directory: "demo" },
        },
      ],
    }),
  ],
});
