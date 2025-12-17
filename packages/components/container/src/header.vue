<script setup lang="ts">
import { computed } from 'vue';
import { useNamespace } from '@vui/hooks';

defineOptions({
  name: 'VHeader',
});

const ns = useNamespace('header');

const props = defineProps<{
  height?: string;
}>();

const style = computed(() => {
  return props.height ? ns.cssVarBlock({ height: props.height }) : {};
});
</script>
<template>
  <header :class="ns.b()" :style>
    <slot></slot>
  </header>
</template>
