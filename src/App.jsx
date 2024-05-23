import styles from "./App.module.css";
import TodoList from "./components/TodoList";
import initialTodos from "./initialTodos";

export default function App() {
  return (
    <div className={styles.app}>
      <nav className={styles.header}>
        <h1>My Todo List</h1>
      </nav>
      <main className={styles.container}>
        <TodoList todos={initialTodos} />
      </main>
    </div>
  );
}
