export type RadioValue = string | number | boolean;

export interface RadioProps {
  value: RadioValue;
  size?: 'small' | 'large';
  modelValue?: RadioValue;
  disabled?: boolean;
  border?: boolean;
  /**
   * @description 原生 `name` 属性
   */
  name?: string;
}

export interface RadioEmits {
  (e: 'change', value: RadioProps['value']): void;
}

export type RadioGroupProps = { modelValue?: RadioValue } & Pick<
  RadioProps,
  'border' | 'disabled' | 'size'
>;
