import React, { useContext, useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { TodoContext } from "../App";

const Wrapper = styled.div`
  height: calc(100% - 218px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TodoList = () => {
  const { todo = [] } = useContext(TodoContext);

  return (
    <Wrapper>
      {todo.map((it) => (
        <TodoItem key={it.id} {...it} />
      ))}
    </Wrapper>
  );
};

export default TodoList;
