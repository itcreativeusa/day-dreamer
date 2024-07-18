import React from "react";
import styles from "./TaskItem.module.css";

const TaskItem = ({ task }) => {
  return (
    <div className={styles.taskItem}>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskItem;
