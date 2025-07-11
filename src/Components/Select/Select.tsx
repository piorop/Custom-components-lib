import React, { useId } from 'react';
import styles from './Select.module.scss';
import { SelectProps } from '../../Types/select';

export default function Select({
  label,
  value = '',
  onChange,
  ...props
}: SelectProps) {
  const isValue = value === '' ? styles.emptyValue : styles.isValue;
  const generatedId = useId();
  const selectId = props.id ?? generatedId;
  return (
    <div className={`${styles.selectWrap} ${isValue}`}>
      <select
        className={styles.selectInput}
        value={value}
        id={selectId}
        onChange={onChange}
        {...props}
      >
        <option disabled hidden></option>
        {props.children}
      </select>
      <label className={styles.selectLabel} htmlFor={selectId}>
        {label}
      </label>
    </div>
  );
}
