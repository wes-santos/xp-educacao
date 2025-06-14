import styles from "./TodoItem.module.css";

import { ReactComponent as IconCheck } from "../../images/icon-check.svg";
import { ReactComponent as IconCross } from "../../images/icon-cross.svg";

import clsx from "clsx";

function TodoItem({ task, handleOnCheckTask, handleDeleteTask }) {
  return (
    <li className={styles.li}>
      <div className={styles.taskLabelGroup}>
        <label htmlFor={task.id} className={styles.checkboxContainer}>
          <input
            type="checkbox"
            id={task.id}
            className={styles.inputTypeCheckbox}
            onChange={() => handleOnCheckTask(task.id)}
            checked={task.checked}
            name="task"
          />
          <IconCheck
            className={
              task.checked
                ? clsx(styles.checkbox, styles.checkboxActive)
                : styles.checkbox
            }
            viewBox="-5 -4 22 18"
          />
          <span htmlFor="task" className={styles.taskItem}>
            {task.name}
          </span>
        </label>

        <button
          className={styles.deleteButton}
          onClick={() => handleDeleteTask(task.id)}
        >
          <IconCross className={styles.deleteButtonIcon} />
          <span className="visually-hidden">Delete</span>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
