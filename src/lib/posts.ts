import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { site } from '../site.config';

export type Post = CollectionEntry<'posts'>;

const postDate = new Intl.DateTimeFormat(site.language, {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
});

export async function getPublishedPosts() {
  const posts = await getCollection('posts', (post) => !post.data.draft);

  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatPostDate(date: Date) {
  return postDate.format(date);
}
