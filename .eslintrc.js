module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/typescript",
    "plugin:import/warnings",
    "next/core-web-vitals",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      arrowFunctions: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react"],
  rules: {
    "import/no-named-as-default": 0,
    "react/prop-types": 0,
    "import/extensions": 0,
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/display-name": 1,
    "no-empty": 0,
    "no-unused-vars": 1,
    "no-console": 1,
    "@next/next/no-script-component-in-head": 0,
    "@next/next/no-img-element": 0,
    "@next/next/no-html-link-for-pages": 0,
  },
};
