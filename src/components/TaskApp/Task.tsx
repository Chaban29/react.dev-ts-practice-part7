import { FC, useState } from 'react';
import { ITask } from './tasks';

interface ITaskProps {
  task: ITask;
  onChange: (task: ITask) => void;
  onDelete: (task: ITask) => void;
}

export const Task: FC<ITaskProps> = ({
  task,
  onChange,
  onDelete,
}: ITaskProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type='checkbox'
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(task)}>Delete</button>
    </label>
  );
};
