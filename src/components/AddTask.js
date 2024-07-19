import React, { useState, useEffect } from "react";
import styles from "./AddTask.module.css";

const AddTask = ({ setTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, [setTasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), title, description };

    // Retrieve existing tasks from localStorage
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Add the new task
    const updatedTasks = [...savedTasks, newTask];

    // Save the updated task list to localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    // Update the state
    setTasks(updatedTasks);

    // Clear the input fields
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
        className={styles.input}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
