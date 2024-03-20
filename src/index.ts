import express from "express";
import taskRouter from "./routes/tasks";

const app = express();
app.use(express.json());

const PORT = 3000;

app.use("/api/tasks", taskRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
