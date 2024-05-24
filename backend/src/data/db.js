import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

let todos = [
  { _id: "1", description: "Learn JS", isComplete: true, dueDate: "2024-05-24" },
  { _id: uuidv4(), description: "Learn HTML", isComplete: true, dueDate: "2024-05-25" },
  { _id: uuidv4(), description: "Learn CSS", isComplete: true, dueDate: "2024-05-26" },
  { _id: uuidv4(), description: "Build an HTML/CSS/JS mini-project", isComplete: true, dueDate: "2024-05-27" },
  { _id: uuidv4(), description: "Learn the command line", isComplete: true, dueDate: "2024-05-28" },
  { _id: uuidv4(), description: "Learn Git", isComplete: true, dueDate: "2024-05-29" },
  { _id: uuidv4(), description: "Learn Node", isComplete: true, dueDate: "2024-05-30" },
  { _id: uuidv4(), description: "Learn React", isComplete: false, dueDate: "2024-05-31" },
  { _id: uuidv4(), description: "Build a Node/CLI mini-project", isComplete: false, dueDate: "2024-06-01" },
  { _id: uuidv4(), description: "Build a React mini-project", isComplete: false, dueDate: "2024-06-02" },
  { _id: uuidv4(), description: "Learn Next", isComplete: false, dueDate: "2024-06-03" },
  { _id: uuidv4(), description: "Onboard onto a full project", isComplete: false, dueDate: "2024-06-04" },
  { _id: uuidv4(), description: "Learn Express", isComplete: false, dueDate: "2024-06-05" },
  { _id: uuidv4(), description: "Learn MongoDB", isComplete: false, dueDate: "2024-06-06" },
];

export async function getAllTodos() {
  return todos;
}

export async function createTodo(description, dueDate) {
  if (!description) throw new Error("Description is required");
  if (!dueDate) throw new Error("Due date is required");
  if (!dayjs(dueDate).isValid()) throw new Error("Invalid due date");

  const newTodo = {
    _id: uuidv4(),
    description,
    isComplete: false,
    dueDate,
  };

  todos.push(newTodo);
  return newTodo;
}

export async function updateTodo(id, isComplete) {
  if (typeof isComplete !== "boolean") {
    throw new Error("isComplete must be a boolean");
  }

  const todo = todos.find((todo) => todo._id === id);
  if (!todo) {
    return null;
  }
  todo.isComplete = isComplete;
  return todo;
}

export async function deleteTodo(id) {
  todos = todos.filter((todo) => todo._id !== id);
}
