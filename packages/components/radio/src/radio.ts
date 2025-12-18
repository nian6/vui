import { ModelRef } from 'vue';

export type RadioValue = string | number | boolean;

export interface RadioProps {
  value: RadioValue;
  size?: 'small' | 'large';
  modelValue?: ModelRef<RadioValue | undefined>;
  disabled?: boolean;
}

export interface RadioEmits {
  (e: 'change', value: RadioProps['value']): void;
}
