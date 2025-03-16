import React from "react";
import CategoriesItem from "./CategoriesItem";

const Categories = ({categories, activeCategory, setActiveCategory}) => {

  return (
    <ul className="todo-categories">
      {categories.map((item, i) => (
        <CategoriesItem
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          index={i}
          text={item}
          key={item}
        />
      ))}
    </ul>
  );
};

export default Categories;
