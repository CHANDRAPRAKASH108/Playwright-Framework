import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['node_modules/', 'playwright-report/', 'test-results/'],
    languageOptions: {
      parser: tsParser,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin,
    },
    rules: {
      semi: 'error',
      'prefer-const': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      'prettier/prettier': 'error', // ✅ Correct way to enforce Prettier rules
    },
  },
  prettierConfig, // ✅ Importing `eslint-config-prettier` separately
]);
