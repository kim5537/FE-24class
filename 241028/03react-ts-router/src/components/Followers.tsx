import React from "react";
import { useOutletContext } from "react-router-dom";

interface FollowersContext {
  nameofMyusers: string;
}

const Followers = () => {
  const { nameofMyusers } = useOutletContext<FollowersContext>();
  return <div>Here is {nameofMyusers}의 Followers</div>;
};

export default Followers;
