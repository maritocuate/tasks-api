export enum Status {
  Pending = "pending",
  InProgress = "in_progress",
  Completed = "completed",
}

export interface Task {
  id: number;
  date: string;
  status: Status;
  description: string;
}

export type NewTask = Omit<Task, "id">;
