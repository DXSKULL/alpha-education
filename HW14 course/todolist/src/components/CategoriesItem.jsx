import React from "react";

const CategoriesItem = ({activeCategory, setActiveCategory, index, text}) => {
  return (
    <li
      onClick={() => setActiveCategory(index)}
      className={
        activeCategory === index
          ? "todo-categories-btn todo-categories-btn__active"
          : "todo-categories-btn"
      }
    >
      {text}
    </li>
  );
};

export default CategoriesItem;
