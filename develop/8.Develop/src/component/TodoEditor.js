import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
// import { TodoContext } from "../App";

const Wrapper = styled.div``;

const H4 = styled.h4`
  font-weight: bold;
  font-size: 24px;
  color: #ffc878;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 14px;
  margin-left: 10px;
  width: 80px;
  background: #ffc878;
  &:hover {
    background: #e5e396;
  }
`;

const Input = styled.input`
  width: 380px;
  border: none;
  padding: 8px;
  border-bottom: 1px solid #ccc;
  &:focus {
    outline: none;
  }
`;

const TodoEditor = ({ onCreate }) => {
  //app에서 만들어져 props 받은 onCreate
  // const {oncreate} = useContext(TodoContext)
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onsubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  return (
    <Wrapper>
      <H4>내가 할 일은?</H4>
      <div>
        <Input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
        ></Input>
        <Button onClick={onsubmit}>추가</Button>
      </div>
    </Wrapper>
  );
};

export default TodoEditor;
