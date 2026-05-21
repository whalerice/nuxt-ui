import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    components: defineCollection({
      type: "page",
      source: "components/*.md",
      schema: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        order: z.coerce.number().optional(),
        category: z.string().optional(),
      }),
    }),
  },
});
