import React, { useContext, useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { TodoListContext } from "../contexts/TodoContexts";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface Props {
  TodoList: Array<string>;
  onDelete?: (todo: string) => void;
}

const TodoList = () => {
  const [todolist, setTodoList] = useState();
  const { todoList, onDelete } = useContext(TodoListContext);
  return (
    <Container>
      {todoList.map((todo, index) => (
        <TodoItem
          key={index}
          label={todo}
          onDelete={() => {
            if (typeof onDelete === "function") onDelete(todo);
          }}
        />
      ))}
    </Container>
  );
};

export default TodoList;
