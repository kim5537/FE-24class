import React, { useState } from "react";
import Viewer from "./Viewer";

// const Viewer = ({ Number }) => {
//   return <div>{Number % 2 === 0 ? <h3>작수</h3> : <h3>홀수</h3>}</div>;
// };

const Body4 = () => {
  const [Number, setNumber] = useState(0);
  const onDecrease = () => {
    setNumber(Number - 1);
  };
  const onIncrease = () => {
    setNumber(Number + 1);
  };
  return (
    <div>
      <div>
        <h2>{Number}</h2>
        <Viewer Number={Number} />
        <div>
          <button onClick={onDecrease}>-</button>
          <button onClick={onIncrease}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Body4;
