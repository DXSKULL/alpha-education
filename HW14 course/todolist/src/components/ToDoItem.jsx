import React from "react";
import { FaTrashAlt } from "react-icons/fa";


const ToDoItem = ({title, isCompleted}) => {
    const classStyle = isCompleted ? "todo todo__completed" : "todo"
  return (
    <li className={classStyle}>
      <span className="todo-border"></span>
      <div className="todo-part">
        <div className="todo-toggle__outer">
            {isCompleted ? <div className="todo-toggle__inner"></div> : null}
        </div>
        <h4 className="todo-title">{title}</h4>
      </div>
      <div className="todo-part">
        <FaTrashAlt className="todo-delete"/>
      </div>
    </li>
  );
};

export default ToDoItem;


