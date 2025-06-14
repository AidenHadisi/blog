import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default("Aiden Hadisi"),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().default("General"),
    subcategory: z.string().optional(),
  }),
});

export const collections = { blog };
