import React from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from '../../Types/button';

export default function Button({
  label,
  size = 'medium',
  variant = 'contained',
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        styles.button,
        styles[`button--${size}`],
        styles[`button--${variant}`],
      ].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
}
