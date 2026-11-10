import { basePath, postPath } from '../lib/paths';
import { getPublishedPosts } from '../lib/posts';
import { site } from '../site.config';

export async function GET() {
  const posts = await getPublishedPosts();
  const pages = [
    { path: basePath },
    { path: `${basePath}works/` },
    ...posts.map((post) => ({
      path: postPath(post.id),
      lastmod: post.data.date.toISOString(),
    })),
  ];
  const urls = pages
    .map(({ path, lastmod }) => {
      const url = new URL(path, site.url).href;
      return `  <url>
    <loc>${url}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}
  </url>`;
    })
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
    {
      headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    },
  );
}
