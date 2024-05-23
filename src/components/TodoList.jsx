import dayjs from "dayjs";
import styles from "./TodoList.module.css";

export default function TodoList({ todos }) {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoListItem key={todo._id} todo={todo} />
      ))}
    </ul>
  );
}

function TodoListItem({ todo }) {
  const dueDate = dayjs(todo.dueDate);
  const isOverdue = dayjs().isAfter(todo.dueDate);
  const status = todo.isComplete
    ? "Complete"
    : isOverdue
    ? "Overdue"
    : "Pending";

  return (
    <li className={styles.item}>
      <div>
        <h2>{todo.description}</h2>
        <p>
          {dueDate.format("dddd Do MMMM, YYYY")} <em>({dueDate.fromNow()})</em>
        </p>
      </div>
      <div>
        <button>{status}</button>
        <button>X</button>
      </div>
    </li>
  );
}
