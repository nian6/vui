export type TextType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type TextSize = 'large' | 'small';

export interface TextProps {
  type?: TextType;
  size?: TextSize;
  tag?: string;
}
