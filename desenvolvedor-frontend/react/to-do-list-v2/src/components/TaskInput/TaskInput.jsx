import styles from "./TaskInput.module.css";

function TaskInput() {
  return (
    <form className={styles.form}>
      <label htmlFor="new-task-input" className="visually-hidden">
        Enter new task
      </label>
      <input
        type="text"
        id="new-task-input"
        placeholder="Create a new task..."
        autoComplete="off"
        className={styles.newTaskInput}
      />
    </form>
  )
}

export default TaskInput;