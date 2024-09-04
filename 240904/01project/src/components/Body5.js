import React, { useState } from "react";
// import React from "react";

const Body5 = () => {
  const [text, setTest] = useState("");
  const textRef = useRef(); //textRef는 객체이다.

  const handleOnChange = (e) => {
    setTest(e.target.value);
  };

  const handleInClick = (e) => {
    if (text.length < 5) textRef.current.focus();
    else {
      alert(text);
      textRef.current.value = "";
    }
  };

  return (
    <div>
      <input ref={textRef} value={text} onChange={handleOnChange} />
      <botton onClick={handleInClick}>작성완료</botton>
    </div>
  );
};

export default Body5;
