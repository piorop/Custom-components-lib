import React from 'react';
import styles from './Modal.module.scss';
import { ModalProps } from '../../Types/modal';

export default function Modal({ open = false, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalDialog} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
