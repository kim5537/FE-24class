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

// interface Props {
//   todoList: string[];
//   onDelete?: (todo: string) => void;
// }

const DataView = () => {
  return (
    <Container>
      <Title label={"할 일 목록"} />
      <TodoList />
    </Container>
  );
};

export default DataView;
