import { ChangeEvent, FC } from 'react';

interface ICheckboxProps {
  labelText: string;
  htmlFor: string;
  type: string;
  id: string;
  name: string;
  className?: string;
  value: boolean | string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const CustomCheckBox: FC<ICheckboxProps> = ({
  htmlFor,
  type,
  id,
  name,
  className,
  checked,
  labelText,
  value,
  onChange,
}: ICheckboxProps) => {
  return (
    <label htmlFor={htmlFor}>
      {labelText}
      <input
        type={type}
        id={id}
        name={name}
        checked={checked}
        value={String(value)}
        onChange={onChange}
      />
    </label>
  );
};
