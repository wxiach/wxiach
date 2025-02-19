import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({ title: z.string(), date: z.coerce.date(), category: z.string() }),
});

const musings = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/musings" }),
  schema: z.object({ date: z.coerce.date() }),
});

export const collections = { posts, musings };
