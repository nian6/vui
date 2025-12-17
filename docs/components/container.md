---
prev: false
next: false
---

# Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`<v-container>`：外层容器。

`<v-header>`：顶栏容器。

`<v-aside>`：侧边栏容器。

`<v-main>`：主要区域容器。

`<v-footer>`：底栏容器。

## 常见页面布局

::: preview
demo-preview=../examples/container/container-hm.vue
:::

::: preview
demo-preview=../examples/container/container-hmf.vue
:::

::: preview
demo-preview=../examples/container/container-ama.vue
:::

::: preview
demo-preview=../examples/container/container-ham.vue
:::

::: preview
demo-preview=../examples/container/container-hamf.vue
:::

::: preview
demo-preview=../examples/container/container-ahm.vue
:::

::: preview
demo-preview=../examples/container/container-ahmf.vue
:::

## Container Attributes

| 属性名   | 说明         | 类型      | 默认值 |
| -------- | ------------ | --------- | ------ |
| vertical | 是否垂直排列 | `boolean` | false  |

## Container Slots

| 插槽名  | 说明           | 子标签                                     |
| ------- | -------------- | ------------------------------------------ |
| default | 自定义默认内容 | Container / Header / Aside / Main / Footer |

## Header Attributes

| 属性名 | 说明     | 类型     | 默认值 |
| ------ | -------- | -------- | ------ |
| height | 顶栏高度 | `string` | 60px   |

## Header Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## Aside Attributes

| 属性名 | 说明       | 类型     | 默认值 |
| ------ | ---------- | -------- | ------ |
| width  | 侧边栏宽度 | `string` | 300px  |

## Aside Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## Main Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## Footer Attributes

| 属性名 | 说明     | 类型     | 默认值 |
| ------ | -------- | -------- | ------ |
| height | 底栏高度 | `string` | 60px   |

## Footer Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
