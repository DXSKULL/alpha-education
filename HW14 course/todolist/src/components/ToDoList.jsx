import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const tasks = [
    {
      name: "Дописать статью",
      isCompleted: false,
    },
    {
      name: "Скачать сериал",
      isCompleted: true,
    },
    {
      name: "Прочитать 3 главу книги",
      isCompleted: true,
    },
    {
      name: "Приготовить ужин",
      isCompleted: false,
    },
  ];
  return (
    <ul className="todo-list">
      <ToDoItem title="Finish project" isCompleted={false} />

      {tasks.map((task) => (
        <ToDoItem title={task.name} isCompleted={task.isCompleted} />
      ))}
    </ul>
  );
};

export default ToDoList;
