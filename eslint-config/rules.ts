import { type Config } from 'eslint/config';

const packageJson = {
  files: ['package.json'],
  rules: {
    'jsonc/sort-keys': [
      'error',
      {
        pathPattern: '^$',
        order: [
          'name',
          'private',
          'packageManager',
          'type',
          'main',
          'scripts',
          'peerDependencies',
          'dependencies',
          'devDependencies',
          'husky',
          'lint-staged',
        ],
      },
      {
        pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
        order: { type: 'asc' },
      },
    ],
  },
};

const vue = {
  rules: {
    'vue/multi-word-component-names': 'off',
  },
};

export default [packageJson, vue] as Config[];
