import { NewTask } from "./types";

export default function toNewTaskEntry(object: any): NewTask {
  const newTask: NewTask = {
    date: object.date,
    status: object.status,
    description: object.description,
  };

  return newTask;
}
