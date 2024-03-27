import { FC, useState } from 'react';
import { ContactList } from './ContactList';
import { EditContact } from './EditContact';
import { IInitialContacts, initialContacts } from './contacts';

export const ContactManager: FC = () => {
  const [contacts, setContacts] = useState<IInitialContacts[]>(initialContacts);
  const [selectedId, setSelectedId] = useState<number>(0);
  const selectedContact = contacts.find((c) => c.id === selectedId);

  function handleSave(updatedData: IInitialContacts) {
    const nextContacts = contacts.map((c) => {
      if (c.id === updatedData.id) {
        return updatedData;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  }

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={(contact) => setSelectedId(contact.id)}
      />
      <hr />
      <EditContact
        key={selectedId}
        initialData={selectedContact || { id: 0, name: '', email: '' }}
        onSave={handleSave}
      />
    </div>
  );
};
