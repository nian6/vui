import { inject } from 'vue';
import { type RadioEmits, type RadioProps } from './radio';
import { radioGroupContextKey } from './constants';

const generateId = () => {
  return `v-radio-${Math.random().toString(36).substring(2, 8)}`;
};

export const useRadio = (props: RadioProps, emit: RadioEmits) => {
  const radioGroup = inject(radioGroupContextKey, {});

  const handleChange = () => {
    emit('change', props.value);
    if (props.modelValue) {
      props.modelValue.value = props.value;
    }
    radioGroup.changeValue?.(props.value);
  };

  return {
    radioId: generateId(),
    handleChange,
    actualValue: radioGroup.modelValue || props.modelValue,
  };
};
