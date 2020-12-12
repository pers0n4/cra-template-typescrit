module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },
  extends: [
    "eslint:recommended",
    "react-app",
    "react-app/jest",
    "airbnb",
    "airbnb/hooks",
    "airbnb/whitespace",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  plugins: [
    "react",
    "react-hooks",
    "jsx-a11y",
    "import",
    "jest",
    "testing-library",
    "prettier",
    "@typescript-eslint",
  ],
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/extensions": [
      "warn",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },
    "import/extensions": [".js", ".jsx", ".mjs", ".ts", ".tsx", ".d.ts"],
    "import/external-module-folders": ["node_modules", "node_modules/@types"],
    react: {
      pragma: "React",
      version: "detect",
    },
  },
};
