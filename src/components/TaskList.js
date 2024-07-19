import React from "react";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";

const TaskList = ({ tasks, removeTask }) => {
  return (
    <div className={styles.taskList}>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              index={index}
              removeTask={removeTask}
            />
          ))}
        </ul>
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
