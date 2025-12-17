<script setup lang="ts">
import { provide, reactive, toRef } from 'vue';
import { useNamespace } from '@vui/hooks';
import type { ButtonGroupProps } from './button-group';
import { buttonGroupContextKey } from './constants';

defineOptions({
  name: 'VButtonGroup',
});

const ns = useNamespace('button-group');
const props = defineProps<ButtonGroupProps>();

provide(
  buttonGroupContextKey,
  reactive({
    size: toRef(props, 'size'),
    type: toRef(props, 'type'),
  }),
);
</script>
<template>
  <div :class="ns.b()">
    <slot></slot>
  </div>
</template>
<style scoped></style>
