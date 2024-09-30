import React from "react";
import styled from "styled-components";
import theme, { amcolor, pmcolor } from "../style/theme";

const Wrapper = styled.div`
  width: 230px;
  height: 300px;
  padding: 10px;
  ${({ theme }) => theme.boxline}
`;

const Header = styled.div`
  text-align: center;
  line-height: 50px;
  width: 100%;
  height: 40px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.linecolor};
`;

const P = styled.p``;

console.log(theme);

const Time = () => {
  return (
    <Wrapper>
      <Header>현재 시간은?</Header>
      <P>*6AM-6PM을 기준으로 테마가 바뀝니다</P>
    </Wrapper>
  );
};

export default Time;
