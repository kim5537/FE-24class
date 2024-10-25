import React, { useState } from "react";
import styled from "styled-components";
import DataView from "./components/DataView";
import TextInput from "./components/TextInput";
import Button from "./components/Button";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #eee;
`;

const MockData = [
  "TypeScript 복습하기",
  "Next.js 예습하기",
  "Node.js 예습하기",
];

//TodoList에 배열형태로 프롭스
const App = () => {
  const [todoList, setTodoList] = useState(MockData);
  const [todo, setTodo] = useState("");

  const onAdd = () => {
    if (todo === "") return;

    setTodoList([todo, ...todoList]);
    setTodo("");
  };

  const onDelete = (todo: string) => {
    setTodoList(todoList.filter((item) => item !== todo));
  };

  return (
    <Container>
      <DataView todoList={todoList} onDelete={onDelete} />
      <TextInput value={todo} onChange={setTodo} />
      <Button label={"추가"} color="#304ffe" onClick={onAdd} />
    </Container>
  );
};

export default App;
