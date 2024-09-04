// import React from "react";
import { useState } from "react";
const Body1 = () => {
  // const handleOnClick = () => {
  //   alert("많이 피곤하시죠! ㅜ");
  // };
  // const handleOnClick = (e) => {
  //   console.log(e.target.name);
  // };
  // const [count, setCount] = useState(0);
  // const onIcrease = () => {
  //   setCount(count + 1);
  // };
  // const [text, setText] = useState("");
  // const handleOnChange = (e) => {
  //   setText(e.target.value);
  // };
  // const [date, setDate] = useState("");
  // const handleOnChange = (e) => {
  //   console.log(e.target.value);
  //   setDate(e.target.value);
  // };
  // const [option, setOption] = useState("");
  // const handleOnChange = (e) => {
  //   console.log("변경된 값", e.target.value);
  //   setOption(e.target.value);
  // };
  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
    console.log("변경값 :", e.target.value);
  };
  return (
    <div>
      {/* <input type="date" value={date} onChage={handleOnChange} /> */}
      {/* <h2>{count}</h2>
      <button onClick={onIcrease}>+</button> */}
      {/* <button onClick={handleOnClick}>클릭하세요</button> */}
      {/* <button name="A버튼" onClick={handleOnClick}>
        A버튼
      </button>
      <button name="B버튼" onClick={handleOnClick}>
        B버튼
      </button> */}
      {/* <input onChange={handleOnChange} />
      <div>{text}</div> */}
      {/* <select value={option} onChange={handleOnChange}>
        <option key={"1번"}>1번</option>
        <option key={"2번"}>2번</option>
        <option key={"3번"}>3번</option>
      </select> */}
      <textarea onChange={handleOnChange} value={text} />
    </div>
  );
};

export default Body1;
