import React from "react";
import styled from "styled-components";
import Circle from "./Circle";

const App = () => {
  return (
    <div>
      <Circle bgColor="teal" borderColor="tomato" />
      <Circle bgColor="tomato" text="Hello!" />
    </div>
  );
};

export default App;
