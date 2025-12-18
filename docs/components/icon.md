---
prev: false
next: false
---

# Icon 图标

Vui 提供了一套常用的图标集合。

## 安装

### 使用包管理器

选择一个你喜欢的包管理器

```bash
npm install @element-plus/icons-vue
```

```bash
yarn add @element-plus/icons-vue
```

```bash
pnpm install @element-plus/icons-vue
```

### 注册所有图标

您需要从 `@element-plus/icons-vue` 中导入所有图标并进行全局注册。

```typescript
// main.ts
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
```

## 基础用法

::: preview
demo-preview=../examples/icon/basic.vue
:::

## 直接使用 SVG 图标

::: preview
demo-preview=../examples/icon/svg.vue
:::

## Icon Attributes

| 属性名 | 说明             | 类型                | 默认值  |
| ------ | ---------------- | ------------------- | ------- |
| color  | svg 的 fill 颜色 | `string`            | inherit |
| size   | SVG 图标的大小   | `number \|  string` | inherit |

## Icon Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
