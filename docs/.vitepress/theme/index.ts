import type { App } from 'vue';
import DefaultTheme from 'vitepress/theme';
import { ElementPlusContainer } from '@vitepress-demo-preview/component';
import '@vitepress-demo-preview/component/dist/style.css';

import vui from 'vui';
import '@vui/theme/src/index.scss';

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('DemoPreview', ElementPlusContainer);
    app.use(vui);
  },
};
