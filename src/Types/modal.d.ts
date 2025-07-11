export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function Modal({
  open,
  onClose,
  children,
}: ModalProps): import('react').JSX.Element;
export {};
