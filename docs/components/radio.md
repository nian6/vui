---
prev: false
next: false
---

# Radio 单选框

在一组备选项中进行单选。

## 基础用法

单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。

要使用 Radio 组件，只需要设置`v-model`绑定变量， 选中意味着变量的值为相应 Radio `value`属性的值， `value`可以是`String`、
`Number` 或 `Boolean`。

::: preview
demo-preview=../examples/radio/basic.vue
:::

## 禁用状态

`disabled` 属性可以用来控制单选框的禁用状态。

你只需要为单选框设置 `disabled` 属性就能控制其禁用状态。

::: preview
demo-preview=../examples/radio/disabled.vue
:::

## 单选框组

适用于在多个互斥的选项中选择的场景。

结合 `v-radio-group` 元素和子元素 `v-radio` 可以实现单选组， 为 `v-radio-group` 绑定 `v-model`，再为 每一个 `v-radio` 设置好 `value` 属性即可。
::: preview
demo-preview=../examples/radio/radio-group.vue
:::

## 带有边框

设置 `border` 属性为 `true` 可以渲染为带有边框的单选框。
::: preview
demo-preview=../examples/radio/border.vue
:::

## Radio Attributes

| 属性名                | 说明             | 类型                              | 默认值 |
| --------------------- | ---------------- | --------------------------------- | ------ |
| model-value / v-model | 选中项绑定值     | `string` \| `number` \| `boolean` | —      |
| value                 | 单选框的值       | `string` \| `number` \| `boolean` | —      |
| disabled              | 是否禁用单选框   | `boolean`                         | —      |
| size                  | 单选框的尺寸     | `'large'` \| `'small'`            | —      |
| border                | 是否显示边框     | `boolean`                         | false  |
| name                  | 原生 `name` 属性 | `string`                          | —      |

## Radio Events

| 事件名 | 说明                   | 类型                                           |
| ------ | ---------------------- | ---------------------------------------------- |
| change | 绑定值变化时触发的事件 | `(value: string \| number \| boolean) => void` |

## Radio Slots

| 插槽名  | 说明                      |
| ------- | ------------------------- |
| default | 默认内容 / 单选框文本内容 |

## RadioGroup Attributes

| 属性名                | 说明             | 类型                              | 默认值 |
| --------------------- | ---------------- | --------------------------------- | ------ |
| model-value / v-model | 选中项绑定值     | `string` \| `number` \| `boolean` | —      |
| size                  | 单选框按钮的大小 | `'large'` \| `'small'`            | —      |
| border                | 是否显示边框     | `boolean`                         | false  |
| disabled              | 是否禁用         | `boolean`                         | false  |

## RadioGroup Events

| 事件名 | 说明                   | 类型                                           |
| ------ | ---------------------- | ---------------------------------------------- |
| change | 绑定值变化时触发的事件 | `(value: string \| number \| boolean) => void` |

## RadioGroup Slots

| 插槽名  | 说明           | 子标签  |
| ------- | -------------- | ------- |
| default | 自定义默认内容 | `Radio` |
