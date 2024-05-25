import dayjs from "dayjs";
import { Todo } from "./schema.js";

export async function getAllTodos() {
  return await Todo.find();
}

export async function createTodo(description, dueDate) {
  if (!description) throw new Error("Description is required");
  if (!dueDate) throw new Error("Due date is required");
  if (!dayjs(dueDate).isValid()) throw new Error("Invalid due date");

  const newTodo = new Todo({
    description,
    dueDate,
  });

  return await newTodo.save();
}

export async function updateTodo(id, isComplete) {
  if (typeof isComplete !== "boolean") {
    throw new Error("isComplete must be a boolean");
  }
  return await Todo.findByIdAndUpdate(id, { isComplete }, { new: true });
}

export async function deleteTodo(id) {
  Todo.findByIdAndDelete(id);
}
