<script setup lang="ts">
import { useNamespace } from '@vui/hooks';
import { computed } from 'vue';
import type { TextProps } from 'vui';

defineOptions({
  name: 'VText',
});

const { type, size, tag = 'span' } = defineProps<TextProps>();

const ns = useNamespace('text');

const cls = computed(() => {
  return [ns.b(), ns.m(type), ns.m(size)];
});
</script>
<template>
  <component :is="tag" :class="cls"><slot>Text</slot></component>
</template>
