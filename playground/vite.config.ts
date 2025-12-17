import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// 指定使用 Chrome 浏览器打开
process.env.BROWSER = 'chrome';

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  plugins: [vue()],
});
