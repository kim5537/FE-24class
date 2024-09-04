import React from "react";
import "./Body.css";

const Body = ({ children }) => {
  console.log(children);
  const num = 19;
  return <div>{children}</div>;
};

export default Body;
