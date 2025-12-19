<script setup lang="ts">
import { computed, provide } from 'vue';
import { useNamespace } from '@vui/hooks';
import type { RadioValue, RadioGroupProps } from './radio';
import { radioGroupContextKey } from './constants';

defineOptions({
  name: 'VRadioGroup',
});

const ns = useNamespace('radio-group');

const props = defineProps<RadioGroupProps>();
const modelValue = defineModel<RadioValue>();

provide(radioGroupContextKey, {
  props,
  changeValue: (value: RadioValue) => {
    modelValue.value = value;
  },
  modelValue: computed(() => modelValue.value),
});
</script>
<template>
  <div :class="ns.b()">
    <slot></slot>
  </div>
</template>
