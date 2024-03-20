export type Status = "pending" | "in_progress" | "completed";

export interface Task {
  id: number;
  date: string;
  status: Status;
  description: string;
}
