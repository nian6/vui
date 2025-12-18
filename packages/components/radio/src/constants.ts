import type { ComputedRef, InjectionKey } from 'vue';
import type { RadioValue } from './radio';

export interface RadioGroupContext {
  changeValue?: (value: RadioValue) => void;
  modelValue?: ComputedRef<RadioValue | undefined>;
}

export const radioGroupContextKey: InjectionKey<RadioGroupContext> = Symbol(
  'radioGroupContextKey',
);
