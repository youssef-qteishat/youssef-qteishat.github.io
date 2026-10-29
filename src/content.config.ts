// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

// 3. Import Zod
import { z } from "astro/zod";

// 4. Define a `loader` and `schema` for each collection
const project = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      date: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      thumbnail: image().optional(),
      videoPlatform: z.enum(["youtube", "loom"]).optional(), // Default: YouTube
      videoId: z.string().optional(),
      repoUrl: z.string().optional(),
      deliverablesUrl: z.string().optional(),
      demoUrl: z.string().optional(),
      tags: z.array(z.string()),
      featured: z.boolean(),
    }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { project };
