import styles from "./ListFilter.module.css";
import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function ListFilter({ handleShowActive, handleShowCompleted, handleShowAll }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={clsx(styles.listFilters, theme === "dark" && styles.listFiltersDark)}>
      <button onClick={handleShowAll} className={styles.button}>All</button>
      <button onClick={handleShowActive} className={styles.button}>Active</button>
      <button onClick={handleShowCompleted} className={styles.button}>Completed</button>
    </div>
  )
}

export default ListFilter