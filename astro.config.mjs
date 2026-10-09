// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// 部署到 GitHub Pages 项目站点（username.github.io/<repo>）时：
//   把 site 改成 https://<username>.github.io，base 改成 '/<repo>'
// 如果使用 username.github.io 仓库或自定义域名，base 保持 '/' 即可。
export default defineConfig({
  site: 'https://wxiach.github.io',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
