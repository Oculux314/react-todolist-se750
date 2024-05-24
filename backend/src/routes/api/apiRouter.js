import { Router } from "express";
import { getAllTodos } from "../../data/db.js";

const apiRouter = Router();

apiRouter.get("/test", (req, res) => {
  res.json({ message: "Hello World!" });
});

apiRouter.get("/todos", async (req, res) => {
  res.json(await getAllTodos());
});

export default apiRouter;
