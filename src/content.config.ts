import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    lang: z.enum(['en', 'tr']).default('en'),
    kind: z.enum(['essay', 'book-notes', 'note']),
    series: z.string().optional(),
    book: z.string().optional(),
    author: z.string().optional(),
    summary: z.string().optional(),
    source: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing };
