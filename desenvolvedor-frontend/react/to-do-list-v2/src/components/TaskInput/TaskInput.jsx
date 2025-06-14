import styles from "./TaskInput.module.css";
import { useState } from "react";


function TaskInput({ addTask }) {
  const [newTask, setNewTask] = useState("");
  
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (newTask.trim() !== "") {
      addTask({
        name: newTask,
        id: crypto.randomUUID(),
        check: false,
      });
      setNewTask("");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleOnSubmit}>
      <label htmlFor="new-task-input" className="visually-hidden">
        Enter new task
      </label>
      <input
        type="text"
        id="new-task-input"
        placeholder="Create a new task..."
        autoComplete="off"
        className={styles.newTaskInput}
        onChange={handleInputChange}
        value={newTask}
      />
    </form>
  )
}

export default TaskInput;