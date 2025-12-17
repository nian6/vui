---
prev: false
next: false
---

# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`plain`和 `round`来定义按钮的样式。
::: preview
demo-preview=../examples/button/basic.vue
:::

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。
::: preview
demo-preview=../examples/button/disabled.vue
:::

## 按钮组

以按钮组的方式出现，常用于多项类似操作。

使用 `<v-button-group>` 对多个按钮分组。
::: preview
demo-preview=../examples/button/group.vue
:::

## 文字按钮

没有边框和背景色的按钮。
::: preview
demo-preview=../examples/button/text.vue
:::

## 按钮尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 `size` 属性额外配置尺寸，可使用 `large` 和 `small` 两种值。
::: preview
demo-preview=../examples/button/size.vue
:::

## Tag

您可以自定义元素标签。例如，按钮，div，路由链接，nuxt链接。
::: preview
demo-preview=../examples/button/tag.vue
:::

## Button Attributes

| 属性名   | 说明                     | 类型                                                        | 默认值 |
| -------- | ------------------------ | ----------------------------------------------------------- | ------ |
| size     | 尺寸                     | `'large' \| 'default' \| 'small'`                           | —      |
| type     | 按钮类型                 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | —      |
| plain    | 是否为朴素按钮           | `boolean`                                                   | false  |
| round    | 是否为圆角按钮           | `boolean`                                                   | false  |
| disabled | 按钮是否为禁用状态       | `boolean`                                                   | false  |
| text     | 是否为文字按钮           | `boolean`                                                   | false  |
| bg       | 是否显示文字按钮背景颜色 | `boolean`                                                   | false  |
| tag      | 自定义元素标签           | `string \| Component`                                       | button |

## Button Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## ButtonGroup Attributes

| 属性名 | 说明                         | 类型                                                        | 默认值 |
| ------ | ---------------------------- | ----------------------------------------------------------- | ------ |
| size   | 用于控制该按钮组内按钮的大小 | `'large' \| 'default' \| 'small'`                           | —      |
| type   | 用于控制该按钮组内按钮的类型 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | —      |

## ButtonGroup Slots

| 插槽名  | 说明             | 子标签 |
| ------- | ---------------- | ------ |
| default | 自定义按钮组内容 | Button |
