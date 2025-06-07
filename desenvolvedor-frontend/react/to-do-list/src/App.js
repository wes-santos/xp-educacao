import './App.css';
import Header from './components/Header'
import List from './components/List';
import Card from './components/Card'


const workTasks = [
  "Create new report",
  "Write informative email",
  "Organize Documents",
  "Prepare budget spreadsheet",
]

const workTasksTitle = "Work Tasks"

const schoolTasks = [
  "Read JS Book",
  "Study Algebra",
  "Do homework",
  "Create expeses spreadsheet",
]

const schoolTasksTitle = "School Tasks";


function App() {
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

      <List
        listTitle={workTasksTitle}
        listItems={workTasks}
      />

      <List
        listTitle={schoolTasksTitle}
        listItems={schoolTasks}
      />

      <List title="Custom Work Tasks">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {workTasks.map((x, y) => <Card key={y} content={x} title="Custom item" />)}
        </div>
      </List>

    </div>
  );
}

export default App;
