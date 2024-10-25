import React, { useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Label from "./components/Label";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 32px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const App = () => {
  const [counter, setCounter] = useState(0);
  const sub = () => {
    setCounter(counter - 1);
  };
  const add = () => {
    setCounter(counter + 1);
  };

  return (
    <Container>
      <Title>Counter App</Title>
      <Content>
        <Button label="-" onClick={sub} />
        <Label data={counter} />
        <Button label="+" onClick={add} />
      </Content>
    </Container>
  );
};

export default App;
