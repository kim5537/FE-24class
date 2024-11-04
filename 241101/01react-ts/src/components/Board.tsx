import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";

const Wrapper = styled.div`
  background: ${(props) => props.theme.boardColor};
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 18px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

interface BoardProps {
  toDos: string[];
  boardId: string;
}

const Board = ({ toDos, boardId }: BoardProps) => {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(magic) => (
          <div ref={magic.innerRef} {...magic.droppableProps}>
            {toDos.map((toDo, index) => (
              <DraggableCard key={toDo} toDo={toDo} index={index} />
            ))}
            {magic.placeholder}
            {/* 요소가 빠질때마다 보드의 사이즈가 변경되는 것을 막아주는것 */}
          </div>
        )}
      </Droppable>
    </Wrapper>
  );
};
export default Board;
