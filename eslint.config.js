const js = require('@eslint/js');
const globals = require('globals');
const importPlugin = require('eslint-plugin-import');
const prettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = [
  { ignores: ['node_modules/**', '.vercel/**', 'dist/**', 'public/**', 'examples/**', '*.config.js'] },
  js.configs.recommended,
  importPlugin.flatConfigs.errors,
  importPlugin.flatConfigs.warnings,
  prettierRecommended,
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: { ...globals.node },
    },
    settings: { 'import/extensions': ['.js'] },
    rules: {
      'import/named': 'off',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'prettier/prettier': ['warn'],
      'no-tabs': 'off',
      'no-unused-vars': 'warn',
    },
  },
];
