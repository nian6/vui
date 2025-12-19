import { inject, type ModelRef } from 'vue';
import type { RadioValue, RadioEmits, RadioProps } from './radio';
import { radioGroupContextKey } from './constants';

const generateId = () => {
  return `v-radio-${Math.random().toString(36).substring(2, 8)}`;
};

export const useRadio = (
  props: Omit<RadioProps, 'modelValue'>,
  emit: RadioEmits,
  modelValue: ModelRef<RadioValue | undefined>,
) => {
  const radioGroup = inject(radioGroupContextKey, {});

  const handleChange = () => {
    emit('change', props.value);
    modelValue.value = props.value;
    radioGroup.changeValue?.(props.value);
  };

  return {
    radioId: generateId(),
    handleChange,
    actualValue: radioGroup.modelValue || modelValue,
  };
};
