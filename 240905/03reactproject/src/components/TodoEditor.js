import React, { useState, useRef } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onKeyDown = (e) => {
    //console.log(e);
    //엔터 누를 시 버튼태그 클릭 이벤트
    //엔터는 keyCode : 13 을 가지고 있다.
    if (e.keyCode === 13) onsubmit();
  };
  const onsubmit = () => {
    //바로 onCreate를 넣으면 무한 루프에 빠질 수 있다. (처음엔 이벤트없어도 함수를 무조건 실행하기 때문) 그래서 콜백으로 만들었다.
    // () =>onCreate() 랑 같은 것.
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent(""); // 입력후 인풋 리셋
  };
  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기🖋</h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder="새로운 Todo…"
        ></input>
        <button onClick={onsubmit}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
