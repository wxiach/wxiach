import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const post = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/post" }),
  schema: z.object({ title: z.string(), date: z.coerce.date(), category: z.string() }),
});

export const collections = { post };
