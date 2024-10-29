import React from "react";
import { useParams, Outlet, Link } from "react-router-dom";
import { users } from "../db";

const User = () => {
  const { userId } = useParams();
  // console.log(params);
  // params를 거치며  문자열이 된다.
  return (
    <>
      <h1>
        user with id {userId} is name : {users[Number(userId) - 1].name}{" "}
      </h1>
      <hr />
      <Link to={"followers"}>see Followers</Link>
      <Outlet context={{ nameofMyusers: users[Number(userId) - 1].name }} />
      {/* // 특정 페이지에 아울렛을 쓰면 자식 컴포넌트를 받겠다는 의미이다. */}
    </>
  );
};

export default User;
