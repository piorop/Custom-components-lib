import { ComponentProps } from 'react';

export interface CheckboxProps extends ComponentProps<'input'> {
  label?: string;
}

export default function Checkbox({
  label,
  ...props
}: CheckboxProps): import('react').JSX.Element;
