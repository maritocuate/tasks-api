import { Task } from "../routes/types";
import taskData from "./tasks.json";

const tasks: Task[] = taskData as Task[];

export const getTasks = (): Task[] => tasks;

export const getTaskById = (id: number): Task | undefined => {
  return tasks.find((task) => task.id === id);
};

export const addTask = () => null;
