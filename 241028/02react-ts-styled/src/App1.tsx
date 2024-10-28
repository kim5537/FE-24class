import React, { useState } from "react";
import { styled, createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.bgColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const App1 = () => {
  const [value, setValue] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    //target은 여기선 value값을 찾아오지 못한다. 때문에 currentTarget으로 가져와야한다.
  };
  return (
    <div>
      <Globalstyle />
      <Container>
        <Title>월요일 실습!</Title>
        <form>
          <input onChange={onChange} type="Text" placeholder="user Name" />
        </form>
      </Container>
    </div>
  );
};

export default App1;

//부모에게 props 찾아오기
// 그 프롭스를  styled로 정의하기
// form의 타입정읜
//styled컴포넌트에서 테마를 정의하는 방법. - index
//react-router-dom 사용하기
