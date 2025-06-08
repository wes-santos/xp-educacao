import './App.css';
import CheckList from './components/CheckList';
import Header from './components/Header';
// import List from './components/List';
import { useState, useEffect } from 'react';

const tasksTitle = "Work Tasks";

function App() {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState([
    { completed: false, content: "Create new report" },
    { completed: false, content: "Write informative email" },
    { completed: false, content: "Organize Documents" },
    { completed: false, content: "Prepare budget spreadsheet" },
    { completed: false, content: "Read JS Book" },
    { completed: false, content: "Study Algebra" },
    { completed: false, content: "Do homework" },
    { completed: false, content: "Create expeses spreadsheet" },
  ]);

  // useEffect(() => {
  //   let savedTasks = localStorage.getItem("savedTasks") || "[]";
  //   savedTasks = JSON.parse(savedTasks);
  //   setTasks(savedTasks);
  // }, [])

  const handleTaskChange = (event) => {
    setInputTask(event.target.value);
  }

  const handleAddTask = (_) => {
    setTasks((p) => [...p, { completed: false, content: inputTask }]);
    setInputTask("");
    // localStorage.setItem("savedTasks", JSON.stringify(tasks));
  }

  const handleDeleteTask = (index) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  }

  const handleCheckChange = (index) => {
    tasks[index].completed = !tasks[index].completed;
    console.log(tasks[index]);
    setTasks([...tasks]);
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
