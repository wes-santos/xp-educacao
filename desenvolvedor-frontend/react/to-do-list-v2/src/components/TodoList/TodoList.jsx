import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import TaskInput from "../TaskInput";
import TodoItem from "../TodoItem";
import ListFilter from "../ListFilter";
import styles from "./TodoList.module.css";
import clsx from "clsx";

function TodoList() {
  const [tasks, setTasks] = useState([
    { name: "task 1", id: 1, checked: false },
    { name: "task 2", id: 2, checked: false },
  ]);

  const [shownTasks, setShownTasks] = useState([]);
  const [filterOption, setFilterOption] = useState("all");

  const { theme } = useContext(ThemeContext);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const filterTasks = (option) => {
      switch (option) {
        case "all": {
          return tasks;
        }
        case "active": {
          return tasks.filter(t => !t.checked)
        }
        case "completed": {
          return tasks.filter(t => t.checked)
        }
        default: {
          return tasks;
        }
      }
    };
    const filteredTasks = filterTasks(filterOption);
    setShownTasks(filteredTasks);
  }, [filterOption, tasks]);

  const ClearCompletedButton = () => (
    <button onClick={handleClearCompleted} className={styles.button}>
      Clear Completed
    </button>
  );

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task, _) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleClearCompleted = () => {
    const clearedTasks = tasks.filter((task) => task.checked !== true);
    setTasks(clearedTasks);
  };

  const handleOnCheckTask = (taskId) => {
    const clonedTasks = [...tasks];
    setTasks(
      clonedTasks.map((t) =>
        t.id === taskId ? { ...t, checked: !t.checked } : t
      )
    );
  };

  const handleShownActive = () => {
    setFilterOption("active");
  };

  const handleShownAll = () => {
    setFilterOption("all");
  };

  const handleShownCompleted = () => {
    setFilterOption("completed");
  };

  return (
    <div className={styles.wrapper}>
      <TaskInput addTask={addTask} />

      <ul className={clsx(styles.todos, theme === "dark" && styles.todosDark)}>
        {shownTasks.map((task, i) => (
          <TodoItem
            key={i}
            task={task}
            handleDeleteTask={handleDeleteTask}
            handleOnCheckTask={handleOnCheckTask}
          />
        ))}

        {windowSize.width < 600 ? (
          <div className={clsx(styles.itemsLeftClearContainer, theme === "dark" && styles.itemsLeftClearContainerDark)}>
            <p>Items Left</p>
            <ClearCompletedButton />
          </div>
        ) : (
          <div className={clsx(styles.itemsLeftClearContainer, theme === "dark" && styles.itemsLeftClearContainerDark)}>
            <p>Items Left</p>
            <ListFilter
              handleShowActive={handleShownActive}
              handleShowAll={handleShownAll}
              handleShowCompleted={handleShownCompleted}
            />
            <ClearCompletedButton />
          </div>
        )}
      </ul>

      {windowSize.width < 600 ? (
        <ListFilter
          handleShowActive={handleShownActive}
          handleShowAll={handleShownAll}
          handleShowCompleted={handleShownCompleted}
        />
      ) : null}
    </div>
  );
}

export default TodoList;
