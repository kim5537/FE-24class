import React, { useState } from "react";
import styled from "styled-components";
import DataView from "./components/DataView";
import InputContainer from "./components/InputContainer";
import { TodoListContextProvider } from "./contexts/TodoContexts";

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
  const [showTodoInput, setshowTodoInput] = useState(false);
  const [todoList, setTodoList] = useState(MockData);
  const [todo, setTodo] = useState("");

  // const onAdd = (todo: string) => {
  //   if (todo === "") return;
  //   setTodoList([todo, ...todoList]);
  //   setshowTodoInput(false);
  //   setTodo("");
  // };

  // const onDelete = (todo: string) => {
  //   setTodoList(todoList.filter((item) => item !== todo));
  // };

  return (
    <Container>
      <TodoListContextProvider>
        <DataView />
        <InputContainer />
      </TodoListContextProvider>
    </Container>
  );
};

export default App;

//효율적 상태관리를 도와주는 방법들
//1. useReducer
//2. useContext
//3. Redux
//3. Redux-thunk
//4. Recoil
//5. React-Query
//......
