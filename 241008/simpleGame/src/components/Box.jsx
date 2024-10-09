import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 500px;
  height: 500px;
  border: 1px solid #000;
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`;

const Img = styled.img`
  width: 400px;
  height: 400px;
`;

const Result = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

const Box = ({ title, item, result }) => {
  //app에서 받아온 props
  if (title === "Computer" && result !== "tie") {
    result = result === "win" ? "lose" : "win";
  }
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Img src={item && item.img} alt="rock" />
      {/* //src={item.img} null 에러가 난다. 왜냐면 app의 item의 state의 초기값이 null 이엇다. 그걸 가져온것. --> 그래서 우리는 단락회로평가 구문을 사용하여 있으면 가져오라는 것을 넣는다 */}
      <Result>{result}</Result>
    </Wrapper>
  );
};

export default Box;
