// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

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

// 部署到 GitHub Pages 项目站点（username.github.io/<repo>）时：
//   把 site 改成 https://<username>.github.io，base 改成 '/<repo>'
// 如果使用 username.github.io 仓库或自定义域名，base 保持 '/' 即可。
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
  },
});
