import dayjs from "dayjs";
import { useState } from "react";
import styles from "./NewTodoForm.module.css";

const today = dayjs().format("YYYY-MM-DD");

export default function NewTodoForm({ onAdd }) {
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(today);

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleDueDateChange(event) {
    setDueDate(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAdd(description, dueDate);
    setDescription("");
    setDueDate(today);
  }

  return (
    <>
      <h2>Add todo...</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
        <label htmlFor="dueDate">Due Date</label>
        <input
          id="dueDate"
          type="date"
          value={dueDate}
          onChange={handleDueDateChange}
        />
        <button type="submit" className={styles.addButton}>
          Add
        </button>
      </form>
    </>
  );
}
