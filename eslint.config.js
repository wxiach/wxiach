import eslintPluginAstro from "eslint-plugin-astro";

export default [
  // 继承 astro 推荐配置
  ...eslintPluginAstro.configs.recommended,

  // 自定义配置
  {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "./tsconfig.json", // 你的tsconfig路径
      sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    extends: ["plugin:@typescript-eslint/recommended"],
    rules: {
      // 你自己的规则
    },
    overrides: [
      {
        files: ["*.astro"],
        parser: "astro-eslint-parser",
        parserOptions: {
          parser: "@typescript-eslint/parser",
        },
      },
    ],
  },
];
