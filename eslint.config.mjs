import nextConfig from "eslint-config-next";
import prettierConfig from "eslint-config-prettier/flat";

const eslintConfig = [
  ...nextConfig,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
  prettierConfig,
];

export default eslintConfig;
