import { basePath } from '../lib/paths';
import { site } from '../site.config';

export function GET() {
  const sitemapUrl = new URL(`${basePath}sitemap.xml`, site.url).href;
  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`;

  return new Response(robots, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
