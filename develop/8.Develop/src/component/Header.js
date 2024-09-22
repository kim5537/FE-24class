import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 4px;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: 40px;
`;

const Text = styled.h3`
  font-size: 14px;
  margin: 0px;
`;

const TextTime = styled.h1`
  margin: 0 0 30px;
  font-size: 30px;
  color: #30cfd0;
`;

const Header = () => {
  return (
    <Wrapper>
      <Text>Todo List</Text>
      <TextTime>{new Date().toLocaleDateString()}</TextTime>
    </Wrapper>
  );
};

export default Header;
