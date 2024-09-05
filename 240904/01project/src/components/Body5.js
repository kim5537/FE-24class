import React, { useState, useRef } from "react";
// import React from "react";

const Body5 = () => {
  const [text, setTest] = useState("");
  const textRef = useRef(); //textRef는 객체이다.
  console.log(textRef);

  const handleOnChange = (e) => {
    setTest(e.target.value);
  };

  const handleInClick = () => {
    if (text.length < 5) textRef.current.focus();
    else {
      alert(text);
      textRef.current.value = "";
    }
  };

  return (
    <div>
      <input ref={textRef} value={text} onChange={handleOnChange} />
      <button onClick={handleInClick}>작성완료</button>
    </div>
  );
};

export default Body5;
