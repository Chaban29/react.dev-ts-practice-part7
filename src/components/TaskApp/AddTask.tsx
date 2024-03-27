import { FC, useState } from 'react';

interface IAddTaskProps {
  onAddTask: (text: string) => void;
}

export const AddTask: FC<IAddTaskProps> = ({ onAddTask }: IAddTaskProps) => {
  const [text, setText] = useState<string>('');

  return (
    <div>
      <input
        type='text'
        placeholder='Add task'
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        type='button'
        onClick={() => {
          setText('');
          onAddTask(text);
        }}
      >
        Add
      </button>
    </div>
  );
};
