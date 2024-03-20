import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send("Fetching Tasks");
});

router.post("/", (_req, res) => {
  res.send("Create Task");
});

export default router;
