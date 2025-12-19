<script setup lang="ts">
import { useNamespace } from '@vui/hooks';
import { useRadio } from './use-radio';
import { type RadioProps, type RadioEmits, RadioValue } from './radio';

defineOptions({
  name: 'VRadio',
});

const ns = useNamespace('radio');

const props = defineProps<RadioProps>();
const emit = defineEmits<RadioEmits>();
const modelValue = defineModel<RadioValue>();

const { radioId, handleChange, actualValue } = useRadio(
  { ...props, modelValue },
  emit,
);
</script>
<template>
  <label
    :class="[
      ns.b(),
      ns.m(props.size),
      ns.is('checked', props.value === actualValue),
      ns.is('disabled', props.disabled),
      ns.is('bordered', props.border),
    ]"
    :for="radioId"
  >
    <span :class="[ns.e('input')]">
      <input
        :id="radioId"
        :class="ns.e('original')"
        type="radio"
        :value="props.value"
        :checked="props.value === actualValue"
        :disabled="props.disabled"
        :name="props.name"
        @change="handleChange"
      />
      <span :class="[ns.e('inner')]"></span>
    </span>
    <span :class="[ns.e('label')]"><slot></slot></span>
  </label>
</template>
