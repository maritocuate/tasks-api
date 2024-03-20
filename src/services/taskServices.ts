import { Task } from "../routes/types";
import taskData from "./tasks.json";

const tasks: Task[] = taskData as Task[];

export const getTasks = () => tasks;

export const addTask = () => null;
