<script setup lang="ts">
import { useNamespace } from '@vui/hooks';

defineOptions({
  name: 'VMain',
});

const ns = useNamespace('main');
</script>
<template>
  <main :class="ns.b()">
    <slot></slot>
  </main>
</template>
