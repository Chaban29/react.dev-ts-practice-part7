import { FC } from 'react';
import { ITask } from './tasks';
import { Task } from './Task';

interface ITaskListProps {
  tasks: ITask[];
  onChangeTask: (task: ITask) => void;
  onDeleteTask: (taskId: number) => void;
}

export const TaskList: FC<ITaskListProps> = ({
  tasks,
  onChangeTask,
  onDeleteTask,
}: ITaskListProps) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task
              task={task}
              onChange={onChangeTask}
              onDelete={() => onDeleteTask(task.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
