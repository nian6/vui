import { defineConfig } from 'vitepress';
import {
  containerPreview,
  componentPreview,
} from '@vitepress-demo-preview/plugin';

import nav from './nav';
import sidebar from './sidebar';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/vui/' : '/',
  title: 'VUI',
  description: '基于Vue3 高仿 element-plus 组件库',
  themeConfig: {
    nav,
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/nian6/vui' }],
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
});
