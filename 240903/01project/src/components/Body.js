import React from "react";
import "./Body.css";

const Body = ({ name, location, favorList }) => {
  // console.log(props);
  // const number = 1;
  // const numberA = 2;
  // const result = number + numberA; // 이렇게 계산해서 result를 가져오는 게 아닌 직접적으로 가능
  // const strA = "안녕";
  // const strB = "리액트"; //문자 더하기도 가능
  // const boolA = true;
  // const boolB = false;
  const num = 19;
  return (
    // <div style={{ backgroundColor: "red", color: "white" }}>
    //   <h1>Body</h1>
    //   {/* <h2>{number}</h2>
    //   <h2>{number + numberA}</h2>
    //   <h2>{strA + strB}</h2>
    //   <h2>{String(boolA || boolB)}</h2> */}
    //   <h2>
    //     {num}는 {num % 2 === 0 ? "짝수" : "홀수"}입니다.
    //   </h2>
    // </div>
    <div>
      <h1>Body</h1>
      <h2>
        {name}은 {location}에 거주한다 <br />
        {favorList.length}개의 음식을 좋아한다.
      </h2>
      {/* <h2>
        {num}는 {num % 2 === 0 ? "짝수" : "홀수"}입니다.
      </h2> */}
    </div>
  );
};

Body.defaultProps = {
  favorList: [],
};

export default Body;
