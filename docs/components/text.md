---
prev: false
next: false
---

# Text 文本

文本的常见操作。

## 基础用法

由 `type` 属性来选择 Text 的类型。
::: preview
demo-preview=../examples/text/basic.vue
:::

## 尺寸

使用 `size` 属性配置尺寸，可选的尺寸大小有: `large` 和 `small`。
::: preview
demo-preview=../examples/text/size.vue
:::

## 覆盖

使用属性 `tag` 覆盖元素。
::: preview
demo-preview=../examples/text/tag.vue
:::

## Text Attributes

| 属性名 | 说明           | 类型                                                        | 默认值 |
| ------ | -------------- | ----------------------------------------------------------- | ------ |
| type   | 类型           | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | —      |
| size   | 大小           | `'large' \|  'small'`                                       | —      |
| tag    | 自定义元素标签 | `string`                                                    | span   |

## Text Slots

| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认内容 |
