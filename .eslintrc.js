module.exports = {
  root: true,
  extends: ["next/core-web-vitals", "eslint:recommended", "prettier"],

  plugins: [
    "@typescript-eslint",
    "sort-destructure-keys",
    "eslint-plugin-import-helpers",
    "simple-import-sort",
    "import",
  ],

  parser: "@typescript-eslint/parser",

  ignorePatterns: [".github", ".next", "node_modules", "generated"],

  env: { browser: true, es6: true, node: true },

  rules: {
    "sort-destructure-keys/sort-destructure-keys": 2,

    /**
     * Imports
     */
    "simple-import-sort/exports": "warn",
    "sort-imports": "off",
    "import/order": "off",
    "import/no-extraneous-dependencies": "off",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import-helpers/order-imports": [
      "error",
      {
        newlinesBetween: "always", // new line between groups
        groups: [
          ["/^react/"],
          ["module"],
          ["/^(app|components|utils)/"],
          // ["parent", "sibling", "index"],
        ],
        alphabetize: {
          order: "asc",
          ignoreCase: true,
        },
      },
    ],
  },

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",

      parserOptions: {
        tsconfigRootDir: __dirname,
        project: true,
      },

      extends: [
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
      ],

      rules: {
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            args: "after-used",
            ignoreRestSiblings: true,
          },
        ],
      },
    },
  ],
};
