import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

const Home = () => {
  const [readSearchParams, setSearchParams] = useSearchParams();
  //쿼리값을 담을 변수, 쿼리값을 관리및 제어
  // console.log(readSearchParams);
  setTimeout(() => {
    setSearchParams({
      day: "today",
      tomorrow: "241030",
    });
  }, 3000);
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
