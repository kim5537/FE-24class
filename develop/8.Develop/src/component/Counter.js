import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 230px;
  height: 280px;
  padding: 10px;
  ${({ theme }) => theme.boxline}
  background: ${(props) => props.theme.opacityWhite};
`;

const Counter = () => {
  return <Wrapper>Counter</Wrapper>;
};

export default Counter;
