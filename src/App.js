import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskItem from "./components/TaskItem";
import styles from "./App.module.css";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    //Fetch tasks from the local storage
    const fetchTasks = async () => {
      const responce = await fetch("/api/tasks");
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
