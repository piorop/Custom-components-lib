import { ComponentProps } from 'react';

export type ButtonVariant = 'text' | 'contained' | 'outlined';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ComponentProps<'button'> {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export default function Button(props: ButtonProps): import('react').JSX.Element;
export {};
