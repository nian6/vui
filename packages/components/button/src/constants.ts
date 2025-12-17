import type { InjectionKey } from 'vue';

import type { ButtonSize, ButtonType } from './button';

export interface ButtonGroupContext {
  size?: ButtonSize;
  type?: ButtonType;
}

export const buttonGroupContextKey: InjectionKey<ButtonGroupContext> = Symbol(
  'buttonGroupContextKey',
);
