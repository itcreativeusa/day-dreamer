import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    //Fetch tasks from the local storage
    const fetchTasks = async () => {
      const response = await fetch("/api/tasks");
      const data = await response.json();
      setTasks(data);
    };
    fetchTasks();
  }, []);
  return (
    <div>
      <Header />
      <AddTask setTasks={setTasks} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
