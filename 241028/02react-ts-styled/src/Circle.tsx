import React, { useState } from "react";
import styled from "styled-components";

// styled컴포넌트도 타입을 정의해줘야한다.
// 우리는 내부에 프롭스로 받은 값을 쓸 것이기 때문에 props를 style컴포넌트에게 전달해야한다
//따라서 CircleProps를 재너럴형식으로 타입을 지정하면된다.
const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background: ${({ bgColor }) => bgColor};
  border: 4px solid ${({ borderColor }) => borderColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Circle = ({ bgColor, borderColor, text = "Wolrd!" }: CircleProps) => {
  const [counter, setCounter] = useState<number | string>(1);
  // setCounter("js");
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text} {counter}
    </Container>
  );
};

export default Circle;
