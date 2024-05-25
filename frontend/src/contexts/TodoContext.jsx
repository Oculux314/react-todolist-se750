import axios from "axios";
import dayjs from "dayjs";
import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext(null);

export function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([]);

  function sortTodos(todos) {
    return todos.sort((a, b) => dayjs(a.dueDate).diff(dayjs(b.dueDate)));
  }

  useEffect(() => {
    axios.get("/api/todos").then((res) => {
      setTodos(sortTodos(res.data));
    });
  }, []);

  function handleToggleComplete(todo) {
    const oldTodos = todos;
    const newTodos = todos.map((t) => {
      return t._id === todo._id ? { ...t, isComplete: !t.isComplete } : t;
    });
    setTodos(newTodos);

    axios
      .patch(`/api/todos/${todo._id}`, {
        isComplete: !todo.isComplete,
      })
      .catch(() => {
        setTodos(oldTodos);
      });
  }

  function handleDelete(todo) {
    const oldTodos = todos;
    const newTodos = todos.filter((t) => t._id !== todo._id);
    setTodos(newTodos);

    axios.delete(`/api/todos/${todo._id}`).catch(() => {
      setTodos(oldTodos);
    });
  }

  function handleAdd(description, dueDate) {
    const oldTodos = todos;
    const newTodo = {
      _id: uuidv4(),
      description,
      dueDate,
      isComplete: false,
    };
    setTodos(sortTodos([...todos, newTodo]));

    axios
      .post("/api/todos", newTodo)
      .then((res) => {
        setTodos(sortTodos([...todos, res.data]));
      })
      .catch(() => {
        setTodos(oldTodos);
      });
  }

  const context = { todos, handleToggleComplete, handleDelete, handleAdd };
  return (
    <TodoContext.Provider value={context}>{children}</TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}
