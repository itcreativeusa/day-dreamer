import React, { useState } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const removeTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddTask setTasks={setTasks} />
        <TaskList tasks={tasks} removeTask={removeTask} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
