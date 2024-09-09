// import React, { useState, useReducer } from "react";

// const TestComp = () => {
//   const [count, setCount] = useState(0);

//   const onIncrease = () => {
//     setCount(count + 1);
//   };
//   const onDecrease = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h4>테스트 컴포넌트</h4>
//       <div>
//         <bold>{count}</bold>
//       </div>
//       <div>
//         <button onClick={onIncrease}>+</button>
//         <button onClick={onDecrease}>-</button>
//       </div>
//     </div>
//   );
// };

// export default TestComp;

import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";

const reducer = (state, action) => {
  //위에 떠있다가 값을 받아옴 = 오버로드
  //action은 dispatch가 전달한 객체를 받아온다.
  //state는 액션 실행후 완선 된 반환값이다 이 state가 완성되면 count에 전달된다.
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    //state로 가는 return
    case "DECREASE":
      return state - action.data;
    case "INIT":
      return 0;
    default:
      return state;
  }
};

const TestComp = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <bold>{count}</bold>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "INIT" })}>0으로 초기화</button>
        <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>
          -
        </button>
      </div>
    </div>
  );
};

export default TestComp;
