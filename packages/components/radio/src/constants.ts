import type { ComputedRef, InjectionKey } from 'vue';
import type { RadioGroupProps, RadioValue } from './radio';

export interface RadioGroupContext {
  changeValue?: (value: RadioValue) => void;
  modelValue?: ComputedRef<RadioValue | undefined>;
  props?: RadioGroupProps;
}

export const radioGroupContextKey: InjectionKey<RadioGroupContext> = Symbol(
  'radioGroupContextKey',
);
