import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  // ESLint's recommended base rules
  js.configs.recommended,

  // TypeScript support for `.ts` and `.tsx` files
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
    },
  },

  // Prettier integration: turns off formatting rules and shows Prettier issues as ESLint errors
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierConfig.rules,
      "prettier/prettier": "error",
    },
  },

  {
    plugins: {
      "jsx-a11y": jsxA11yPlugin,
    },
    rules: {
      ...jsxA11yPlugin.configs.recommended.rules,
    },
  },

  {
    ignores: [
      "**/node_modules/**",
      ".next/**",
      "dist/**",
      "build/**",
      "public/**",
      ".storyblok/**",
      "next-env.d.ts"
    ],
  },

  // Legacy config via FlatCompat (e.g., Next.js settings + your custom rules)
  ...compat.config({
    extends: ["next/core-web-vitals"],
    rules: {
      semi: ["error", "always"],
      "no-extra-semi": "error",
    },
  }),
];

export default eslintConfig;
