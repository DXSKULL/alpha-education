import React from 'react';

const Categories = () => {
    return (
        <ul className="todo-categories">
            <li className="todo-categories-btn todo-categories-btn__active">Все</li>
            <li className="todo-categories-btn">Завершенные</li>
            <li className="todo-categories-btn">Не завершенные</li>
          </ul>
    );
};

export default Categories;