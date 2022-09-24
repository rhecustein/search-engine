module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:vue/vue3-recommended",
    "plugin:vue/essential",
    "plugin:vuejs-accessibility/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: ["prettier-vue", "@typescript-eslint"],
  rules: {
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "vuejs-accessibility/click-events-have-key-events": "off",
    "vue/no-multiple-template-root": "off",
  },
  overrides: [
    {
      files: ["*.vue"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:vue/vue3-recommended",
        "plugin:vuejs-accessibility/recommended",
        "plugin:prettier-vue/recommended",
        "prettier",
      ],
      rules: {
        "vue/script-setup-uses-vars": "error",
        "vue/multi-word-component-names": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],

        "vuejs-accessibility/form-control-has-label": "off",
        "vuejs-accessibility/label-has-for": "off",
        "vuejs-accessibility/anchor-has-content": "off",
        "vuejs-accessibility/click-events-have-key-events": "off",
        "vue/no-multiple-template-root": "off",
      },
    },
  ],
};
