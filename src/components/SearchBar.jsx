import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onChange, initialValue = "" }) {
  const [text, setText] = useState(initialValue);

  function handleChange(event) {
    setText(event.target.value.toLowerCase());
    onChange(event.target.value);
  }

  return (
    <input
      className={styles.searchBar}
      type="search"
      placeholder="🔍 Search..."
      value={text}
      onChange={handleChange}
    />
  );
}
