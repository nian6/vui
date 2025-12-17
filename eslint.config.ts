import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfig from '@vui/eslint-config';

export default defineConfig(
  ...eslintConfig,
  globalIgnores([
    '**/node_modules/**',
    '**/dist/**',
    'playground/**',
    'pnpm-lock.yaml',
    'docs/.vitepress/cache/*',
  ]),
);
