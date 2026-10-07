import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'writing'>;

export const kindLabels: Record<Post['data']['kind'], string> = {
  essay: 'Essay',
  'book-notes': 'Book notes',
  note: 'Note',
};

/** Published posts, newest first; undated posts go last. */
export async function getPosts() {
  const posts = await getCollection('writing', (p) => !p.data.draft);
  return posts.sort((a, b) => (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0));
}

export function formatDate(d?: Date, lang = 'en') {
  if (!d) return '';
  return d.toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-GB', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}
