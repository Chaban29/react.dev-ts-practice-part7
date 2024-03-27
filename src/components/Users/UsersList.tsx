import { FC, useState } from 'react';
import { initialContacts } from '../UsersForm/contacts';
import { Contact } from './Contact';

export const UsersList: FC = () => {
  const [isReverse, setIsReverse] = useState<boolean>(false);

  const displayedContacts = [...initialContacts];
  if (isReverse) {
    displayedContacts.reverse();
  }

  return (
    <>
      <label>
        <input
          type='checkbox'
          value={String(isReverse)}
          onChange={(e) => {
            setIsReverse(e.target.checked);
          }}
        />{' '}
        Show in reverse order
      </label>
      <ul>
        {displayedContacts.map((contact, i) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};
