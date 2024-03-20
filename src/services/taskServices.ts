import { NewTask, Task } from "../types";
import taskData from "./tasks.json";

const tasks: Task[] = taskData as Task[];

export const getTasks = (): Task[] => tasks;

export const getTaskById = (id: number): Task | undefined => {
  return tasks.find((task) => task.id === id);
};

export const addTask = (task: NewTask): Task => {
  const newTask: Task = {
    id: Math.max(...tasks.map((task) => task.id)) + 1,
    ...task,
  };

  tasks.push(newTask);
  return newTask;
};
