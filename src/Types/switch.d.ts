export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Switch({
  checked,
  disabled,
  onChange,
}: SwitchProps): import('react').JSX.Element;
export {};
