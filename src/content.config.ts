import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const productsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    category: z.string(),
    title_es: z.string(),
    title_en: z.string(),
    description_es: z.string(),
    description_en: z.string(),
    hero_image: z.string(),
    features_es: z.array(z.string()).optional(),
    features_en: z.array(z.string()).optional(),
    gallery: z.array(z.object({
      src: z.string(),
      alt_es: z.string(),
      alt_en: z.string()
    })).optional(),
    order: z.number().default(0),
    visible: z.boolean().default(true)
  }),
});

export const collections = {
  products: productsCollection,
};
