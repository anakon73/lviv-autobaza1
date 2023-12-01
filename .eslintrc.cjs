module.exports = {
  root: true,
  extends: ["plugin:tailwindcss/recommended"],
  overrides: [
    {
      files: ["*.html", "*.blade.php", "*.hbs"],
      parser: "@angular-eslint/template-parser",
    },
  ],
  rules: {
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/enforces-negative-arbitrary-values": "off",
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
}
