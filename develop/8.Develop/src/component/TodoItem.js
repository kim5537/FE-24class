import React from "react";
import styled from "styled-components";

const Wapper = styled.div`
  padding: 4px;
  margin: 0 auto;
  border: 1px solid orange;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Todo = styled.div`
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: space-between;
  border: 1px dotted orangered;
  border-radius: 10px;
  padding: 10px;
`;

const Input = styled.input`
  width: 20px;
  height: 20px;
  appearance: none;
  border: 1px solid #ccc;
  border-radius: 50px;
  &:checked {
    border: 1px solid #ffc878;
    background-color: #ffc878;
  }
`;

const TextItem = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;
const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
`;

const TodoItem = () => {
  return (
    <div>
      <Wapper>
        <Todo>
          <TextItem>
            <Input type="checkbox" />
            item
          </TextItem>
          <Button>삭제</Button>
        </Todo>
      </Wapper>
    </div>
  );
};

export default TodoItem;
