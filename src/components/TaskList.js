import React from "react";
import TasItem from "./TaskItem";

const TastList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TasItem key={task.id} task={task} />
      ))}
    </div>
  );
};
export default TastList;
