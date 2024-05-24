import { useState } from "react";
import styles from "./App.module.css";
import TodoList from "./components/TodoList";
import initialTodos from "./initialTodos";

export default function App() {
  const [todos, setTodos] = useState(initialTodos);

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

  return (
    <div className={styles.app}>
      <nav className={styles.header}>
        <h1>My Todo List</h1>
      </nav>
      <main className={styles.container}>
        <TodoList
          todos={todos}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDelete}
        />
      </main>
    </div>
  );
}
