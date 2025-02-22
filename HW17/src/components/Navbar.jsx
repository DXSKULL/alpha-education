import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/users">Пользователи</Link></li>
        <li><Link to="/books">Книги</Link></li>
      </ul>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
