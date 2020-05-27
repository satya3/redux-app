import React, { useState, useEffect } from "react";

export const Users = () => {
  const [users, useritems] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   getUsers();
  // }, []);

  // const getUsers = async () => {
  //   setLoading(false);
  //   const res = await fetch("./data/users.json");
  //   const data = await res.json();

  //   setUsers(data);
  //   setLoading(false);
  // };

  if (loading) {
    return <h1>Loading....</h1>;
  }

  // console.log(getUsers);
  return (
    <div>
      <h2>Test</h2>
    </div>
  );
};

export default Users;
