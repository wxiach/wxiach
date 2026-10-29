import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET({ site }: APIContext) {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const pages = [
    { path: '', lastmod: undefined },
    { path: 'blog/', lastmod: undefined },
    { path: 'works/', lastmod: undefined },
    ...posts.map((post) => ({
      path: `blog/${post.id}/`,
      lastmod: post.data.date.toISOString(),
    })),
  ];
  const urls = pages
    .map(({ path, lastmod }) => {
      const url = new URL(`${base}${path}`, site).href;
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
