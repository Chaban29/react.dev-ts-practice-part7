import { FC, useState } from 'react';
import { IInitialContacts } from './contacts';

interface IEditContact {
  initialData: IInitialContacts;
  onSave: (updatedData: IInitialContacts) => void;
}

export const EditContact: FC<IEditContact> = ({
  initialData,
  onSave,
}: IEditContact) => {
  const [name, setName] = useState(initialData.name);
  const [email, setEmail] = useState(initialData.email);

  const handleReset = () => {
    setName(initialData.name);
    setEmail(initialData.email);
  };

  return (
    <section>
      <label>
        Name:{' '}
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:{' '}
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button
        onClick={() => {
          const updatedData = { ...initialData, name: name, email: email };
          onSave(updatedData);
        }}
      >
        Save
      </button>
      <button onClick={handleReset}>Reset</button>
    </section>
  );
};
