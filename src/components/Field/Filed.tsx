import { ChangeEvent, FC, useState } from 'react';

interface ILabel {
  label: string;
}

export const Field: FC<ILabel> = ({ label }: ILabel) => {
  const [text, setText] = useState<string>('');

  const handleInputValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <label htmlFor='text'>
      {label}{' '}
      <input
        value={text}
        placeholder={label}
        onChange={handleInputValueChanged}
        type='text'
        id='text'
        name='text'
      />
    </label>
  );
};
