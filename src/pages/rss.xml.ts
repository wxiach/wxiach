import { postPath } from '../lib/paths';
import { getPublishedPosts } from '../lib/posts';
import { site } from '../site.config';

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export async function GET() {
  const siteUrl = new URL(site.url);
  const posts = await getPublishedPosts();
  const items = posts
    .map((post) => {
      const url = new URL(postPath(post.id), siteUrl).href;
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
    <description>${escapeXml(site.description)}</description>
    <language>${site.language}</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
