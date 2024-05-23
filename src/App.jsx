import { app } from "./App.module.css";
import TodoList from "./components/TodoList";
import initialTodos from "./initialTodos";

export default function App() {
  return (
    <main className={app}>
      <nav>
        <h1>My Todo List</h1>
        <TodoList todos={initialTodos} />
      </nav>
    </main>
  );
}
