export interface IInitialContacts {
  id: number;
  name: string;
  email: string;
}

export const initialContacts: IInitialContacts[] = [
  { id: 0, name: 'Alice', email: 'alice@mail.com' },
  { id: 1, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];
