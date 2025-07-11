import React from 'react';
import styles from './Checkbox.module.scss';
import { CheckboxProps } from '../../Types/checkbox';

export default function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <label className={styles.checkboxLabel}>
      <div className={styles.checkboxInputHover}>
        <input type="checkbox" {...props} />
      </div>
      {label}
    </label>
  );
}
