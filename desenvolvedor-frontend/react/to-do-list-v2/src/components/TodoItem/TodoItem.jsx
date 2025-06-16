import styles from './TodoItem.module.css';

import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { ReactComponent as IconCheck } from '../../images/icon-check2.svg';
import { ReactComponent as IconCross } from '../../images/icon-cross.svg';

import clsx from 'clsx';

function TodoItem({
  task,
  handleOnCheckTask,
  handleDeleteTask,
  handleDragStart,
  handleDragOver,
  handleDragEnd,
  index,
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <li
      className={clsx(styles.li, theme === 'dark' && styles.liDark)}
      data-index={index}
      draggable
      onDragStart={(e) => handleDragStart(e, index)}
      onDragOver={() => handleDragOver(index)}
      onDragEnd={handleDragEnd}
    >
      <div className={styles.taskLabelGroup}>
        <label htmlFor={task.id} className={styles.checkboxContainer}>
          <input
            type='checkbox'
            id={task.id}
            className={styles.inputTypeCheckbox}
            onChange={() => handleOnCheckTask(task.id)}
            checked={task.checked}
            name='task'
          />
          <IconCheck
            className={
              task.checked
                ? clsx(
                    styles.checkbox,
                    styles.checkboxActive,
                    theme === 'dark' && styles.checkboxDark
                  )
                : clsx(styles.checkbox, theme === 'dark' && styles.checkboxDark)
            }
            stroke='transparent'
            viewBox='-5 -4 22 18'
          />
          <span htmlFor='task' className={styles.taskItem}>
            {task.name}
          </span>
        </label>

        <button
          className={styles.deleteButton}
          onClick={() => handleDeleteTask(task.id)}
        >
          <IconCross className={styles.deleteButtonIcon} />
          <span className='visually-hidden'>Delete</span>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
