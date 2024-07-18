import React from "react";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";
const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};
export default TaskList;
