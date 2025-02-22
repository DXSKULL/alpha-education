import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.slingacademy.com/v1/sample-data/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch((error) => console.error("Ошибка:", error));
  }, []);

  return (
    <div>
      <h1>Список пользователей</h1>
      {loading ? <Loader /> : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.first_name} {user.last_name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
