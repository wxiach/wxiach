import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

// Official recommended configuration.
export default tseslint.config(...eslintPluginAstro.configs.recommended);
