import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../../data/db.js";

const apiRouter = Router();

apiRouter.get("/test", (req, res) => {
  res.json({ message: "Hello World!" });
});

apiRouter.get("/todos", async (req, res, next) => {
  try {
    res.json(await getAllTodos());
  } catch (error) {
    next(error);
  }
});

apiRouter.post("/todos", async (req, res, next) => {
  try {
    const { description, dueDate } = req.body;
    const newTodo = await createTodo(description, dueDate);
    res.status(201).location(`/api/todos/${newTodo._id}`).json(newTodo);
  } catch (error) {
    next(error);
  }
});

apiRouter.patch("/todos/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { isComplete } = req.body;
    const updatedTodo = await updateTodo(id, isComplete);
    res.json(updatedTodo);
  } catch (error) {
    next(error);
  }
});

apiRouter.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  deleteTodo(id);
  res.sendStatus(204);
});

export default apiRouter;
