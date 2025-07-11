import { ComponentProps } from 'react';

export interface SelectProps extends ComponentProps<'select'> {
  label: string;
}

export default function Select({
  label,
  value = '',
  onChange,
  ...props
}: SelectProps): import('react').JSX.Element;
