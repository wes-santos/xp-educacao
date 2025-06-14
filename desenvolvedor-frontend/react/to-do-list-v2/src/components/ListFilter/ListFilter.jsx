import styles from "./ListFilter.module.css";

function ListFilter({ handleShowActive, handleShowCompleted, handleShowAll }) {
  return (
    <div className={styles.listFilters}>
      <button onClick={handleShowAll} className={styles.button}>All</button>
      <button onClick={handleShowActive} className={styles.button}>Active</button>
      <button onClick={handleShowCompleted} className={styles.button}>Completed</button>
    </div>
  )
}

export default ListFilter