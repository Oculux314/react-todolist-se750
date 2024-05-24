import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./App.module.css";
import NewTodoForm from "./components/NewTodoForm";
import SearchBar from "./components/SearchBar";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  const filteredTodos = todos.filter((todo) =>
    todo.description.toLowerCase().includes(searchText)
  );

  return (
    <div className={styles.app}>
      <nav className={styles.header}>
        <h1>My Todo List</h1>
      </nav>
      <main className={styles.container}>
        <SearchBar onChange={setSearchText} />
        <TodoList
          todos={filteredTodos}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDelete}
        />
        <NewTodoForm onAdd={handleAdd} />
      </main>
    </div>
  );
}
