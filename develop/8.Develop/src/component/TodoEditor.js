import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../App";

const Wrapper = styled.div`
  display: flex;
  height: 40px;
  margin: 0 auto;
  gap: 10px;
`;

const Input = styled.input`
  width: 380px;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.linecolor};
  background: transparent;
  color: ${(props) => props.theme.linecolor};
  font-size: 18px;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.linecolor};
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.linecolor};
  border-radius: 10px;
  width: 40px;
  text-align: center;
  line-height: 32px;
  background-color: #ffffff20;
`;

const TodoEditor = () => {
  const { onCreate } = useContext(TodoContext);
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const enterEnvent = (e) => {
    if (e.keyCode === 13) onsubmit();
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
      <Input
        ref={inputRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={enterEnvent}
        placeholder="오늘 할 일은?"
      ></Input>
      <H1 onClick={onsubmit}>+</H1>
    </Wrapper>
  );
};

export default TodoEditor;
