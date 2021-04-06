import React, { useState, useEffect } from "react";

const Home = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const foundUser = token;
      setUser(foundUser);
    }
  }, []);
  if (user) {
    return <div>{user} is loggged in</div>;
  }

  return (
    <>
      <h1>Home</h1>
      <p>User is not logged in</p>
    </>
  );
};

export default Home;
