import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Box from "./Box";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 4px;
`;

const App = () => {
  const dispatch = useDispatch(); //액션 정의
  const count = useSelector((state) => state.count);
  //state는  참조변수고 안에 count가 있다. 리듀서 안에 initialState에 정의한 값이다.
  const id = useSelector((state) => state.id);
  const pw = useSelector((state) => state.pw);

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
    //액션값은 객체형태를 가진다
    //payload는 인자값을 준다. 이 값도 객체의 형태를 띄고 가야한다.
  };
  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "Vivi", pw: "1234" } });
  };

  const decrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <Wrapper>
      <h1>{count}</h1>
      <ButtonGroup>
        <button onClick={increase}>증가</button>
        <button onClick={decrease}>감소</button>
      </ButtonGroup>
      <h1>
        {id}님 환영합니다. {pw}
      </h1>
      <button onClick={login}>로그인</button>
      {/* <Box /> */}
    </Wrapper>
  );
};

export default App;
