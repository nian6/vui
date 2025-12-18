import type { App } from 'vue';
import DefaultTheme from 'vitepress/theme';
import { ElementPlusContainer } from '@vitepress-demo-preview/component';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import '@vitepress-demo-preview/component/dist/style.css';

import vui from 'vui';
import '@vui/theme/src/index.scss';

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('DemoPreview', ElementPlusContainer);
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
    app.use(vui);
  },
};
