import React, { useState } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const removeTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTask setTasks={setTasks} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
