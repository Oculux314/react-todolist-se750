import dayjs from "dayjs";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./App.module.css";
import NewTodoForm from "./components/NewTodoForm";
import SearchBar from "./components/SearchBar";
import TodoList from "./components/TodoList";
import initialTodos from "./initialTodos";

export default function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [searchText, setSearchText] = useState("");

  function handleToggleComplete(todo) {
    const newTodos = todos.map((t) => {
      return t._id === todo._id ? { ...t, isComplete: !t.isComplete } : t;
    });
    setTodos(newTodos);
  }

  function handleDelete(todo) {
    const newTodos = todos.filter((t) => t._id !== todo._id);
    setTodos(newTodos);
  }

  function handleAdd(description, dueDate) {
    const newTodo = {
      _id: uuidv4(),
      description,
      dueDate,
      isComplete: false,
    };
    setTodos(
      [...todos, newTodo].sort((a, b) =>
        dayjs(a.dueDate).diff(dayjs(b.dueDate))
      )
    );
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
