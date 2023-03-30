import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <TaskCreate />
      <TaskList />
    </div>
  );
}

export default App;
