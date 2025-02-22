import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.slingacademy.com/v1/sample-data/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data.user);
        setLoading(false);
      })
      .catch((error) => console.error("Ошибка:", error));
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : user ? (
        <div>
          <h1>{user.first_name} {user.last_name}</h1>
          <p>Email: {user.email}</p>
          <p>Город: {user.city}</p>
          <img src={user.profile_picture} alt="Аватар" width="150" />
        </div>
      ) : (
        <p>Пользователь не найден</p>
      )}
    </div>
  );
};

export default UserDetail;
