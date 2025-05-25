/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: { node: true, es2022: true, browser: true },
  extends: ["eslint:recommended", "plugin:astro/recommended", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "max-len": ["error", { code: 120 }],
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
      },
    },
    {
      // 定义 `<script>` 标签的配置。
      // `<script>` 中的脚本被分配了带有 `.js` 扩展名的虚拟文件名。
      files: ["**/*.astro/*.js", "*.astro/*.js"],
      parser: "@typescript-eslint/parser",
    },
  ],
};
