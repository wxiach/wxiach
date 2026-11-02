这里是我的个人主页，内容待补充。

需要使用组件的文章使用 `.mdx` 扩展名，普通文章继续使用 `.md`。

项目卡片可以在文章的 frontmatter 后导入：

```mdx
import ProjectCard from '../../components/ProjectCard.astro';
import ProjectCards from '../../components/ProjectCards.astro';

<ProjectCards>
  <ProjectCard
    title="m-spring"
    description="一个用于学习 IoC 与 AOP 原理的迷你 Spring 实现。"
    href="https://github.com/wxiach/m-spring"
    label="wxiach/m-spring"
  />
</ProjectCards>
```

`ProjectCards` 用于多张卡片的响应式排列，`ProjectCard` 也可以单独使用。`label` 可省略，默认显示链接的域名和路径。
