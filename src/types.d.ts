// 使用方 src/site.config.ts 的类型，同时声明 @site-config 虚拟模块
declare module '@site-config' {
  export const site: {
    name: string;
    title: string;
    description: string;
    intro: string;
    url: string;
    avatar: string;
    avatarSmall: string;
    footerQuote: string;
    nav: { href: string; label: string }[];
  };
}
