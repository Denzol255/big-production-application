const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    'comma-dangle': OFF,
    '@typescript-eslint/comma-dangle': OFF,
    semi: OFF,
    '@typescript-eslint/semi': OFF,
    '@typescript-eslint/quotes': OFF,
    'react/react-in-jsx-scope': OFF,
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
    ],
    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/member-delimiter-style': OFF,
    '@typescript-eslint/strict-boolean-expressions': OFF,
    '@typescript-eslint/no-unused-vars': WARN,
    '@typescript-eslint/space-before-function-paren': OFF,
    '@typescript-eslint/no-floating-promises': OFF,
    '@typescript-eslint/array-type': OFF,
    '@typescript-eslint/naming-convention': WARN,
    'i18next/no-literal-string': ['warn', { markupOnly: true }],
  },
  globals: {
    __IS_DEV__: true,
  },
};
