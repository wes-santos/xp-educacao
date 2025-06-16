import styles from "./TaskInput.module.css";
import clsx from "clsx";
import { useState, useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";


function TaskInput({ addTask }) {
  const [newTask, setNewTask] = useState("");
  const { theme } = useContext(ThemeContext);
  
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
    <form className={clsx(styles.form, theme === "dark" && styles.formDark)} onSubmit={handleOnSubmit}>
      <label htmlFor="new-task-input" className="visually-hidden">
        Enter new task
      </label>
      <input
        type="text"
        id="new-task-input"
        placeholder="Create a new task..."
        autoComplete="off"
        className={clsx(styles.newTaskInput, theme === "dark" && styles.newTaskInputDark)}
        onChange={handleInputChange}
        value={newTask}
      />
    </form>
  )
}

export default TaskInput;