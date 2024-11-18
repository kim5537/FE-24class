import React, { memo } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Card = styled.div<DraggingProps>`
  /* background: ${(props) => props.theme.cardColor}; */
  background: ${(props) =>
    props.isDragging ? "lightgrey" : props.theme.cardColor};
  border-radius: 8px;
  margin-bottom: 5px;
  padding: 10px;
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0,0,0,0.5)" : "none"};
`;

interface DraggingProps {
  isDragging: boolean;
}

interface DraggableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

const DraggableCard = ({ toDoId, toDoText, index }: DraggableCardProps) => {
  //console.log(toDo);
  //porps로 왓으니 객체일 것
  return (
    <Draggable key={toDoId} draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);