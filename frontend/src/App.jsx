import { useState } from "react";
import styles from "./App.module.css";
import NewTodoForm from "./components/NewTodoForm";
import SearchBar from "./components/SearchBar";
import TodoList from "./components/TodoList";
import { useTodos } from "./contexts/TodoContext";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const { todos } = useTodos();

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
        />
        <NewTodoForm />
      </main>
    </div>
  );
}
