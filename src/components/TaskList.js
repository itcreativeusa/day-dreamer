import React from "react";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";
// task list component
const TaskList = ({ tasks, removeTask }) => {
  return (
    <div className={styles.taskList}>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            // task item component
            <TaskItem
              key={index}
              task={task}
              index={index}
              removeTask={removeTask}
            />
          ))}
        </ul>
      ) : (
        // if no tasks available
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
