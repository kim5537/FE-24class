import React, { useContext, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Basket } from "../style/Icon";
import { TodoContext } from "../App";
import { Check } from "../style/Icon";

const Wapper = styled.div`
  height: 46px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3px;
  margin-bottom: 10px;
`;

const CheckWrap = styled.div`
  width: 46px;
  height: 100%;
  background: ${(props) => props.theme.basecolor};
  border: 1px solid ${({ theme }) => theme.maincolor};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  width: 100%;
  height: 100%;
  position: relative;
  svg {
    width: 50px;
    display: none;
  }
  &.active svg {
    display: block;
    position: absolute;
    top: -6px;
    left: 6px;
  }
`;

const ItemWrap = styled.div`
  width: calc(100% - 46px);
  border: 1px solid ${({ theme }) => theme.maincolor};
  border-radius: 10px;
  background: ${(props) => props.theme.basecolor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Todo = styled.div`
  flex: 2;
`;

const Input = styled.input`
  display: none;
`;

const TextItem = styled.div`
  color: ${(props) => props.theme.linecolor};
  font-weight: 600;
  &.active {
    text-decoration: line-through;
    opacity: 40%;
  }
`;

const TodoItem = ({ id, isDone, content, createdDate }) => {
  const { onUpdate, onDelete } = useContext(TodoContext);
  const [checkItem, setCheckItem] = useState(isDone);
  const check = `check-${id}`;
  const onItemDelete = () => {
    onDelete(id);
  };

  const onCheckItem = () => {
    setCheckItem((prev) => !prev);
    onUpdate(id);
  };

  const onCheck = () => {};
  return (
    <Wapper>
      <CheckWrap onClick={onCheck}>
        <Label className={checkItem ? "active" : ""} htmlFor={check}>
          <Check />
        </Label>
      </CheckWrap>
      <Input
        type="checkbox"
        id={check}
        checked={checkItem}
        onChange={onCheckItem}
      />
      <ItemWrap>
        <Todo>
          <TextItem className={checkItem ? "active" : ""}>{content}</TextItem>
        </Todo>
        <Basket onClick={onItemDelete} />
      </ItemWrap>
    </Wapper>
  );
};

export default TodoItem;
