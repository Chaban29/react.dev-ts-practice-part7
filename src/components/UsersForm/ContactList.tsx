import { FC } from 'react';
import { IInitialContacts } from './contacts';

interface IContactList {
  contacts: IInitialContacts[];
  selectedId: number;
  onSelect: (contact: IInitialContacts) => void;
}

export const ContactList: FC<IContactList> = ({
  contacts,
  selectedId,
  onSelect,
}: IContactList) => {
  return (
    <section>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                onSelect(contact);
              }}
            >
              {contact.id === selectedId ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
