import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://api.slingacademy.com/v1/sample-data/users")
      .then((res) => {
        setUsers(res.data.users);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Пользователи</h1>
      {loading ? <Loader /> : (
        <ul>
          {users.map(user => (
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
