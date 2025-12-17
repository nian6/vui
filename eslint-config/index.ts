import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier/recommended';
import prettierConfig from 'eslint-config-prettier';
import pluginVue from 'eslint-plugin-vue';
import pluginJson from 'eslint-plugin-jsonc';
import pluginMarkdown from 'eslint-plugin-markdown';
import rules from './rules';

export default defineConfig([
  {
    files: ['**/*.{js,ts,jsx,tsx,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  js.configs.recommended,
  tslint.configs.recommended,
  pluginVue.configs['flat/recommended'],
  ...pluginJson.configs['flat/recommended-with-jsonc'],
  pluginMarkdown.configs.recommended,
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tslint.parser,
      },
    },
  },
  ...rules,
  prettierConfig,
  prettier,
]);
