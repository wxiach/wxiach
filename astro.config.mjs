// @ts-check
import { defineConfig } from 'astro/config';
import { imageMetadata } from 'astro/assets/utils';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import { readFile } from 'node:fs/promises';
import { site } from './src/site.config.ts';

const publicDirectory = new URL('./public/', import.meta.url);

async function addImageDimensions(properties) {
  const { src, width, height } = properties;
  if (typeof src !== 'string' || !src.startsWith('/') || src.startsWith('//'))
    return;
  if (width || height) return;

  const file = new URL(`.${src}`, publicDirectory);
  if (!file.href.startsWith(publicDirectory.href)) return;

  try {
    const size = await imageMetadata(await readFile(file));
    properties.width = size.width;
    properties.height = size.height;
  } catch {
    // 图片尺寸只用于占位，缺失时仍可继续构建。
  }
}

function rehypeArticleImages() {
  async function visit(node) {
    if (node.type === 'element' && node.tagName === 'img') {
      node.properties.loading = 'lazy';
      node.properties.decoding = 'async';
      await addImageDimensions(node.properties);
    }

    for (const child of node.children ?? []) {
      await visit(child);
    }
  }

  return visit;
}

export default defineConfig({
  site: site.url,
  base: '/',
  redirects: { '/blog': '/' },
  prefetch: true,
  integrations: [mdx()],
  markdown: {
    rehypePlugins: [rehypeArticleImages],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
