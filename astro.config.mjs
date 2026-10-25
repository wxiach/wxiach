// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

// 正文图片统一加懒加载与异步解码
function rehypeLazyImages() {
  const walk = (node) => {
    if (node.type === 'element' && node.tagName === 'img') {
      node.properties.loading = 'lazy';
      node.properties.decoding = 'async';
    }
    (node.children || []).forEach(walk);
  };
  return (tree) => walk(tree);
}

export default defineConfig({
  site: 'https://wxiach.cn',
  base: '/',
  // 悬停导航链接时预取页面，站内跳转秒开
  prefetch: true,
  markdown: {
    rehypePlugins: [rehypeLazyImages],
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@site-config': fileURLToPath(
          new URL('./src/site.config.ts', import.meta.url),
        ),
      },
    },
  },
});
