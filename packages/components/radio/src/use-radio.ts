import { computed, inject, reactive, toRefs, type ModelRef } from 'vue';
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

  const actualProps = reactive({
    ...toRefs(props),
    border: computed(() => props.border ?? radioGroup.props?.border),
    disabled: computed(() => props.disabled ?? radioGroup.props?.disabled),
    size: computed(() => props.size ?? radioGroup.props?.size),
  });

  return {
    radioId: generateId(),
    handleChange,
    actualValue: radioGroup.modelValue || modelValue,
    props: actualProps,
  };
};
