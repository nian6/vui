<script setup lang="ts">
import { computed } from 'vue';
import { useNamespace } from '@vui/hooks';
import type { IconProps } from './icon';

defineOptions({ name: 'VIcon' });

const { size, color } = defineProps<IconProps>();

const ns = useNamespace('icon');

const style = computed(() => {
  return [
    ns.cssVarBlock({
      size: size ? `${size}px` : '',
      color: color ? color : '',
    }),
  ];
});
</script>

<template>
  <i :class="ns.b()" :style>
    <slot></slot>
  </i>
</template>
