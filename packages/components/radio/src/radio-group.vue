<script setup lang="ts">
import { computed, provide, watch } from 'vue';
import { useNamespace } from '@vui/hooks';
import type { RadioValue, RadioGroupProps, RadioGroupEmits } from './radio';
import { radioGroupContextKey } from './constants';

defineOptions({
  name: 'VRadioGroup',
});

const ns = useNamespace('radio-group');

const props = defineProps<RadioGroupProps>();
const modelValue = defineModel<RadioValue>();
const emit = defineEmits<RadioGroupEmits>();

watch(modelValue, (val) => emit('change', val));

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
