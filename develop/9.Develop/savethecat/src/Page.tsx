import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Page = () => {
  const onDropEnd = () => {};
  return (
    <>
      <DragDropContext onDragEnd={onDropEnd}>
        <Droppable>
          <Draggable></Draggable>
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default Page;
