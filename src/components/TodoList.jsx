import dayjs from "dayjs";
import styles from "./TodoList.module.css";

export default function TodoList({ todos, onToggleComplete }) {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoListItem
          key={todo._id}
          todo={todo}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
}

function TodoListItem({ todo, onToggleComplete }) {
  const dueDate = dayjs(todo.dueDate);
  const isOverdue = dayjs().isAfter(todo.dueDate);
  const status = todo.isComplete
    ? "Complete"
    : isOverdue
    ? "Overdue"
    : "Pending";
  const buttonClass = todo.isComplete
    ? styles.complete
    : isOverdue
    ? styles.overdue
    : styles.pending;

  return (
    <li className={styles.item}>
      <div>
        <h2>{todo.description}</h2>
        <p>
          {dueDate.format("dddd Do MMMM, YYYY")} <em>({dueDate.fromNow()})</em>
        </p>
      </div>
      <button className={buttonClass} onClick={() => onToggleComplete(todo)}>
        {status}
      </button>
      <button>X</button>
    </li>
  );
}
