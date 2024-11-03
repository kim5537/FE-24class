import React from "react";
import styled from "styled-components";
import theme from "../style/theme";

const Wrapper = styled.div`
  height: 108px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-bottom: 1px solid ${(props) => props.theme.linecolor};
`;

const Text = styled.h3`
  font-size: ${({ theme }) => theme.font.md};
  color: ${({ theme }) => theme.linecolor};
`;

const TextTime = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => theme.linecolor};
`;

const Header = () => {
  return (
    <Wrapper>
      <Text>TODO LIST</Text>
      <TextTime>{new Date().toLocaleDateString()}</TextTime>
    </Wrapper>
  );
};

export default Header;
