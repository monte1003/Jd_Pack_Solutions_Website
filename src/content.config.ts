import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const categoriesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/categories" }),
  schema: z.object({
    title_en: z.string(),
    title_es: z.string(),
    description_en: z.string(),
    description_es: z.string(),
    thumbnail: z.string(),
    order: z.number().default(0),
    visible: z.boolean().default(true),
    subcategories: z.array(z.object({
      slug: z.string(),
      title_en: z.string(),
      title_es: z.string(),
      description_en: z.string().optional(),
      description_es: z.string().optional(),
      images: z.array(z.object({
        src: z.string(),
        alt_en: z.string(),
        alt_es: z.string(),
      })),
    })).optional(),
  }),
});

export const collections = {
  categories: categoriesCollection,
};
