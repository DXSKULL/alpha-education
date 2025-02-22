import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://api.slingacademy.com/v1/sample-data/users/${id}`)
      .then(res => {
        setUser(res.data.user);
        setLoading(false);
      });
  }, [id]);

  return loading ? <Loader /> : (
    <div>
      <h1>{user.first_name} {user.last_name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetail;
