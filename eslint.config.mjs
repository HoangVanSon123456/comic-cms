import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    ignores: ["node_modules", ".next", "dist"],
  },
  js.configs.recommended, // rule JS cơ bản
  ...nextPlugin.configs["core-web-vitals"], // rule mặc định Next.js
  prettierConfig, // tắt rule ESLint xung đột với Prettier
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "warn", // cảnh báo nếu không đúng format Prettier
      "no-unused-vars": "warn",
    },
  },
];
