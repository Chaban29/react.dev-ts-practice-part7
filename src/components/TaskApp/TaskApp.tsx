import { FC, useState } from 'react';
import { ITask, initialTasks } from './tasks';
import { AddTask } from './AddTask';
import { TaskList } from './TaskList';

export const TaskApp: FC = () => {
  const [tasks, setTasks] = useState<ITask[]>(initialTasks);
  const [nextId, setNextId] = useState<number>(3);

  const handleAddTask = (text: string) => {
    setTasks([
      ...tasks,
      {
        id: nextId,
        text: text,
        done: false,
      },
    ]);
    setNextId(nextId + 1);
  };

  const handleChangeTask = (updatedTask: ITask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={(text) => handleAddTask(text)} />
      <TaskList
        tasks={tasks}
        onChangeTask={(task) => handleChangeTask(task)}
        onDeleteTask={(taskId) => handleDeleteTask(taskId)}
      />
    </>
  );
};
