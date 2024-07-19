import React from "react";
import styles from "./TaskItem.module.css";
// task item component
const TaskItem = ({ task }) => {
  return (
    <div className={styles.taskItem}>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskItem;
