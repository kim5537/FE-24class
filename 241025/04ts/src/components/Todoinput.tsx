import React, { useContext, useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";
import Title from "./Title";
import { TodoListContext } from "../contexts/TodoContexts";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
`;

const Contents = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

interface Props {
  onClose: () => void;
}

const Todoinput = ({ onClose }: Props) => {
  const { onAdd } = useContext(TodoListContext);
  const [todo, setTodo] = useState("");
  const onAddTodo = () => {
    //바로 onAdd를 onclick함수로 사용 할 수 없다. 매개변수가 없기 때문
    if (todo === "") return;
    onAdd(todo);
    setTodo("");
    onClose();
  };
  return (
    <Container>
      <Background />
      <Contents>
        <Title label={"할 일 추가"} />
        <InputContainer>
          <TextInput value={todo} onChange={setTodo} />
          <Button label={"추가"} color="#304ffe" onClick={onAddTodo} />
        </InputContainer>
      </Contents>
    </Container>
  );
};

export default Todoinput;
