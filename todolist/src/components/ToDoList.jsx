import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <ToDoItem
          toggleTaskCompletion={toggleTaskCompletion}
          title={task.name}
          isCompleted={task.isCompleted}
          deleteTask={deleteTask}
          key={task.name}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
