import React from "react";
import styled from "styled-components";
import Title from "./Title";
import TodoList from "./TodoList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 32px;
  border-radius: 8px;
`;

interface Props {
  todoList: string[];
  onDelete?: (todo: string) => void;
}

const DataView = ({ todoList, onDelete }: Props) => {
  return (
    <Container>
      <Title label={"할 일 목록"} />
      <TodoList TodoList={todoList} onDelete={onDelete} />
    </Container>
  );
};

export default DataView;
