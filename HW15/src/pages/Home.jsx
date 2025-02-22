import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Добро пожаловать!</h1>
      <p>Выберите раздел:</p>
      <ul>
        <li><Link to="/users">Список пользователей</Link></li>
      </ul>
    </div>
  );
};

export default Home;
