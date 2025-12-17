---
prev: false
next: false
---

# 快速开始

## 安装

```bash
npm i vui --save
```

## 开始使用

**全局使用**

```js
import Vui from 'vui';
import '@vui/theme/src/index.scss';

app.use(Vui);
```

```vue
<template>
  <v-button>我是 Button</v-button>
</template>
```

**单个导入**

Vui 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。

```vue
<template>
  <v-button>我是 Button</v-button>
</template>
<script>
import { VButton } from 'vui';
export default {
  components: { VButton },
};
</script>
```
