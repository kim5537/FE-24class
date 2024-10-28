import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.color};
`;

// const Box = styled.div`
//   width: 100px;
//   height: 100px;
//   background: ${({ bgColor }) => bgColor}; //  구조분해 (props)=>props.bgColor
// `;

// const Circle = styled(Box)`
//   border-radius: 50%;
// `;

const Btn = styled.button`
  background: tomato;
  color: #fff;
  padding: 8px;
  border: none;
  border-radius: 8px;
`;

const Input = styled.input.attrs({ required: "true" })`
  /* background: tomato; */
`;

const rotationAnimation = keyframes`
from {
transform: rotate(0deg);
border-radius: 0px;

}to {
  transform: rotate(360deg);
  border-radius: 100px;
}
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background: tomato;
  animation: ${rotationAnimation} 1s linear infinite alternate;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    &:hover {
      font-size: 60px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

const App = () => {
  return (
    // <div style={{ display: "flex" }}>
    //   <div style={{ background: " tomato", width: 100, height: 100 }}>App</div>
    //   <div style={{ background: "teal", width: 100, height: 100 }}>App2</div>
    // </div>
    <Container>
      <Title>Hello World</Title>
      {/* <Box bgColor="teal" />
      // <Circle bgColor="tomato" /> */}
      {/* <Btn>Log in</Btn>
       <Btn as="a" href="#">
       Log out
      </Btn> //앵커태그로 바뀜*/}
      {/* <Input required="true" /> */}
      {/* 무조건 값을 받아야하는 필수값 */}
      {/* <Input /> */}
      <Box>
        {/* <span>🌍</span> */}
        <Emoji>🌍</Emoji>
      </Box>
      <Emoji>🚞</Emoji>
    </Container>
  );
};

export default App;
