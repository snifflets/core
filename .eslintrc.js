module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    // important language properties
    "@typescript-eslint/class-literal-property-style": ["error", "fields"],
    "@typescript-eslint/consistent-type-assertions": ["error", {
      assertionStyle: "as",
      objectLiteralTypeAssertions: "never",
    }],
    // TODO it's too strict "@typescript-e3slint/consistent-type-definitions": ["error", "type"],
    // TODO it's useless "@typescript-eslint/consistent-type-exports": ["error"],
    // TODO it's useless "@typescript-eslint/consistent-type-imports": ["error"],
    /* TODO it duplicates tsconfig property noPropertyAccessFromIndexSignature
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": ["error"]
     */
    "@typescript-eslint/explicit-function-return-type": ["error", {
      allowExpressions: false,
      allowTypedFunctionExpressions: false,
      allowHigherOrderFunctions: true,
      allowDirectConstAssertionInArrowFunctions: false,
      allowConciseArrowFunctionExpressionsStartingWithVoid: false,
    }],
    "@typescript-eslint/explicit-module-boundary-types": ["error", {
      allowArgumentsExplicitlyTypedAsAny: false,
      allowDirectConstAssertionInArrowFunctions: true,
      allowedNames: [],
      allowHigherOrderFunctions: true,
      allowTypedFunctionExpressions: true,
    }],
    "init-declarations": "off",
    "@typescript-eslint/init-declarations": ["error", "always"],
    "@typescript-eslint/method-signature-style": ["error", "property"],
    "@typescript-eslint/no-explicit-any": ["error", {
      fixToUnknown: true,
      ignoreRestArgs: false,
    }],
    "@typescript-eslint/no-implicit-any-catch": ["error"],
    "no-invalid-this": "off",
    "@typescript-eslint/no-invalid-this": ["error"],
    "@typescript-eslint/no-misused-new": "error",

    // visual language properties
    "@typescript-eslint/array-type": ["error", {
      default: "array",
    }],
    "@typescript-eslint/await-thenable": ["error"],
    "@typescript-eslint/ban-ts-comment": ["error", {
      "ts-expect-error": "allow-with-description",
      "ts-ignore": true,
      "ts-nocheck": true,
      "ts-check": false,
      minimumDescriptionLength: 3,
    }],
    // TODO it's too strict "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
    "@typescript-eslint/default-param-last": ["error"],
    "@typescript-eslint/explicit-member-accessibility": ["error", {
      accessibility: "explicit",
    }],
    "@typescript-eslint/member-delimiter-style": ["error"],
    "@typescript-eslint/no-array-constructor": ["error"],
    "@typescript-eslint/no-confusing-non-null-assertion": ["error"],
    "@typescript-eslint/no-confusing-void-expression": ["error"],
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": ["error"],
    "no-duplicate-imports": "off",
    "@typescript-eslint/no-duplicate-imports": ["error"],
    "@typescript-eslint/no-extra-non-null-assertion": ["error"],
    "@typescript-eslint/no-extraneous-class": {
      allowConstructorOnly: false,
      allowEmpty: false,
      allowStaticOnly: false,
      allowWithDecorator: true, // only for Nestjs
    },
    "@typescript-eslint/no-for-in-array": ["error"],
    "no-implied-eval": "off",
    "@typescript-eslint/no-implied-eval": ["error"],
    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": ["error"],
    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": ["error"],
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksConditionals": false,
      },
    ],

    // recommendations
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "brace-style": "off",
    "@typescript-eslint/brace-style": ["error"],
    "indent": "off",
    "@typescript-eslint/indent": ["error", 4],
    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": ["error"],
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": ["error", {
      exceptAfterOverload: true,
      exceptAfterSingleLine: false,
    }],
    "@typescript-eslint/member-ordering": ["error", {
      // TODO
    }],
    "@typescript-eslint/naming-convention": ["error", {
      format: ["camelCase"],
      // TODO
    }],
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": ["error"],
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        "allowSingleExtends": false,
      },
    ],
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": ["error"],
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": ["error"],
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": [
      "error",
      {
        /* options */
      },
    ],
  },
};
