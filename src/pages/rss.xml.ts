import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '@site-config';

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export async function GET({ site: siteUrl }: APIContext) {
  const posts = (await getCollection('posts', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  const items = posts
    .map((post) => {
      const url = new URL(`${base}blog/${post.id}/`, siteUrl).href;
      const title = escapeXml(post.data.title);
      const description = escapeXml(post.data.description ?? '');
      return `
    <item>
      <title>${title}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <description>${description}</description>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(site.name)}</title>
    <link>${siteUrl.href}</link>
    <description>${escapeXml('无畏小生的个人博客。')}</description>
    <language>zh-CN</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
