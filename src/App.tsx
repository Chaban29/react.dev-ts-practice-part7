import { FC } from 'react';
import './App.css';
import { TaskApp } from './components/TaskApp/TaskApp';

export const App: FC = () => {
  return (
    <div className='App'>
      <TaskApp />
    </div>
  );
};
