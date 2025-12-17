<script setup lang="ts">
import { useNamespace } from '@vui/hooks';
import { computed } from 'vue';

defineOptions({
  name: 'VAside',
});

const ns = useNamespace('aside');

const { width = '300px' } = defineProps<{
  width?: string;
}>();

const style = computed(() => {
  return ns.cssVarBlock({ width });
});
</script>
<template>
  <aside :class="ns.b()" :style>
    <slot></slot>
  </aside>
</template>
