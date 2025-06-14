import { useState, useEffect } from "react";
import TaskInput from "../TaskInput";
import TodoItem from "../TodoItem";
import ListFilter from "../ListFilter";
import styles from "./TodoList.module.css";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  useEffect(() => {

  }, [])

  return (
    <div className={styles.wrapper}>
      <TaskInput />

      <ul className={styles.todos}>
        {tasks.map((task, i) => (
          <TodoItem key={i} task={task} />
        ))}

        {windowSize.width < 600 ? (
          <div>
            <p>Items Left</p>
            <button>Clear Completed</button>
          </div>
        ) : (
          <div>
            <p>Items Left</p>
            <ListFilter />
            <button>Clear Completed</button>
          </div>
        )}
      </ul>

      { windowSize.width < 600 ? <ListFilter /> : null }
    </div>
  )
}

export default TodoList;