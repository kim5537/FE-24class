import React from "react";

//항상 상태를 관리할 땐 초기화가 필요하다. 즉 초기값을 지정해줘야한다.
//초기값을 관리할 객체
//전개연산자로 수정한 부분만 바꾼 객체로 만든다. 왜냐면 초기값이 여러개 일 수 있기 때문
let initialState = {
  count: 0,
  id: "",
  pw: "",
};

const Reducer = (state = initialState, action) => {
  //(초기값 , 액션객체)
  // if (action.type === "INCREMENT") {
  //   return { ...state, count: state.count + 1 };
  // }
  // //위에 리턴은 if문의 리턴값이다. 즉 reducer에게 값을 준 것.
  // //그래서 reducer 밖으로 값을 보내는 return이
  // return { ...state };
  //action 객체 안에는 타입 혹은 페이로드가 있다.

  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.num };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "LOGIN":
      return { ...state, id: action.payload.id, pw: action.payload.pw };
    default:
      return { ...state };
  }
};

export default Reducer;
