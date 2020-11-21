module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "vue/valid-template-root": 0, // Правило 1 корневой элемент фикс для vue-3
    "no-console": "warn", // Без консоли
    "@typescript-eslint/no-empty-function": 1
    // "eqeqeq": ["warn", "always"], // Не работало
  }
};
