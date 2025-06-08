import './App.css';
import CheckList from './components/CheckList';
import Header from './components/Header';
import { useState, useEffect } from 'react';

const tasksTitle = "Work Tasks";


const saveTasksListInLocalStorage = (tasks) => {
    localStorage.setItem("savedTasks", JSON.stringify(tasks));
};


function App() {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let savedTasks = localStorage.getItem("savedTasks") || "[]";
    savedTasks = JSON.parse(savedTasks);
    setTasks(savedTasks);
  }, [])

  const handleTaskChange = (event) => {
    setInputTask(event.target.value);
  }

  const handleAddTask = (_) => {
    let tasksList = [...tasks, { completed: false, content: inputTask }]
    setTasks(tasksList);
    setInputTask("");
    saveTasksListInLocalStorage(tasksList);
  }

  const handleDeleteTask = (index) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
    saveTasksListInLocalStorage(tasks);
  }

  const handleCheckChange = (index) => {
    tasks[index].completed = !tasks[index].completed;
    console.log(tasks[index]);
    setTasks([...tasks]);
    saveTasksListInLocalStorage(tasks);
  }

  return (
    <div
      style={{
        width: "700px",
        border: "1px solid",
        padding: "8px",
        margin: "8px auto 8px auto",
        backgroundColor: "lightgray"
      }}
    >
      <Header />
      <input
        value={inputTask}
        onChange={handleTaskChange}
        type="text"
        style={{ marginRight: "5px" }}
      />
      <button onClick={handleAddTask}>Add task</button>

      <CheckList
        listTitle={tasksTitle}
        listItems={tasks}
        handleDeleteTask={handleDeleteTask}
        handleCheckChange={handleCheckChange}
      />
    </div>
  );
}

export default App;
