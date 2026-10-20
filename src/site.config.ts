// 站点个人信息。所有组件都从这里读，改这一处即可。
export const site = {
  // 站点名：导航栏、页脚、文章页标题后缀
  name: '无畏小生',
  // 首页 <title> 与默认描述
  title: '无畏小生的博客',
  description: '无畏小生的个人博客。',
  // 首页介绍段落
  intro: '无畏小生的个人博客。',
  // 站点域名（用于 OG 链接）
  url: 'https://wxiach.cn',
  // public/ 下的头像，avatarSmall 用于导航栏，avatar 用于 OG 分享图
  avatar: '/avatar.jpg',
  avatarSmall: '/avatar-small.jpg',
  // 页脚右侧的一句话
  footerQuote: '「路虽远，行则将至。」',
  // 顶部导航，href 以 / 开头
  nav: [
    { href: '/', label: '首页' },
    { href: '/blog/', label: '博客' },
    { href: '/works/', label: '作品' },
  ],
};
