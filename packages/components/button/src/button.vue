<script setup lang="ts">
import { computed, inject } from 'vue';
import { useNamespace } from '@vui/hooks';
import type { ButtonProps } from './button';
import { buttonGroupContextKey } from './constants';

defineOptions({
  name: 'VButton',
});

const {
  type,
  plain,
  round,
  size,
  disabled,
  text,
  bg,
  tag = 'button',
} = defineProps<ButtonProps>();

const ns = useNamespace('button');

const buttonGroupContext = inject(buttonGroupContextKey, undefined);

const cls = computed(() => {
  return [
    ns.b(),
    ns.m(type || buttonGroupContext?.type),
    ns.m(buttonGroupContext?.size || size),
    ns.is('plain', plain),
    ns.is('round', round),
    ns.is('text', text),
    ns.is('bg', bg),
  ];
});
</script>
<template>
  <component :is="tag" :disabled :class="cls">
    <span><slot>Text</slot></span>
  </component>
</template>
<style scoped></style>
