import React, { useState } from "react";
import styles from "./AddTask.module.css";

const AddTask = ({ setTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { title, description };

    // Save the new task to backend or local storage
    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    const savedTask = await response.json();
    setTasks((prevTasks) => [...prevTasks, savedTask]);

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.addTask}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
