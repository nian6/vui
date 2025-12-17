export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info';

export type ButtonSize = 'large' | 'small';

export interface ButtonProps {
  type?: ButtonType;
  plain?: boolean;
  size?: ButtonSize;
  round?: boolean;
  disabled?: boolean;
  tag?: string;
  text?: boolean;
  bg?: boolean;
}
