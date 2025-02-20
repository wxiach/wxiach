import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const post = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({ title: z.string(), date: z.coerce.date(), category: z.string() }),
});

const musing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/musings" }),
  schema: z.object({ date: z.coerce.date() }),
});

export const collections = { post, musing };
