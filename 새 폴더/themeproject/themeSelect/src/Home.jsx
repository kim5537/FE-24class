import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
`;
// background: ${(props)=>props.theme.};

const ItemBox = styled.div`
  border: 2px solid ${({ theme }) => theme.accentColor};
  padding: 10px 20px;
  border-radius: 10px;
`;

const Home = () => {
  return (
    <Wrapper>
      <ItemBox> Home </ItemBox>
    </Wrapper>
  );
};

export default Home;
