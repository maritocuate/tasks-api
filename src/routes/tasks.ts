import express from "express";
import { getTasks, getTaskById, addTask } from "../services/taskServices";
import toNewTaskEntry from "../utils";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(getTasks());
});

router.get("/:id", (req, res) => {
  const taskId = Number(req.params.id);
  res.send(getTaskById(taskId));
});

router.post("/", (req, res) => {
  try {
    const newTaskEntry = toNewTaskEntry(req.body);
    const newTask = addTask(newTaskEntry);

    res.send(newTask);
  } catch (e) {
    res.status(400).send(e);
  }
});

export default router;
