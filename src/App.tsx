import { FC } from 'react';
import './App.css';
import { ContactManager } from './components/UsersForm/ContactManager';

export const App: FC = () => {
  return (
    <div className='App'>
      <ContactManager />
    </div>
  );
};
