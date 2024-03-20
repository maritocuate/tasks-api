import express from "express";
import { getTasks, getTaskById } from "../services/taskServices";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(getTasks());
});

router.get("/:id", (req, res) => {
  const taskId = Number(req.params.id);
  res.send(getTaskById(taskId));
});

router.post("/", (_req, res) => {
  res.send("Create Task");
});

export default router;
