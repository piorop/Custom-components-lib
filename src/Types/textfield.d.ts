import { ComponentProps } from 'react';

type errorType = boolean | (() => boolean);

export interface TextFieldProps extends ComponentProps<'input'> {
  label: string;
  error?: errorType;
}

export default function TextField({
  label,
  error,
  ...props
}: TextFieldProps): import('react').JSX.Element;
export {};
