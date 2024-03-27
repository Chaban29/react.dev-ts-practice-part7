import { FC, useState } from 'react';
import { IInitialContacts } from '../UsersForm/contacts';

interface IContactProps {
  contact: IInitialContacts;
}

export const Contact: FC<IContactProps> = ({ contact }: IContactProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div>
      <>
        <p>
          <b>{contact.name}</b>
        </p>
        {expanded && (
          <p>
            <i>{contact.email}</i>
          </p>
        )}
        <button
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {expanded ? 'Hide' : 'Show'} email
        </button>
      </>
    </div>
  );
};
