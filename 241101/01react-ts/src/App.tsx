import React from "react";
import { createGlobalStyle, styled } from "styled-components";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { toDoState } from "./atoms";
import DraggableCard from "./components/DraggableCard";
import Board from "./components/Board";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    background: ${(props) => props.theme.bgColor};
    color: #000;
  }
`;

const Wrapper = styled.main`
  width: 1200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Boards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const App = () => {
  const [toDos, setToDos] = useRecoilState(toDoState); //>> { todo:[{},{}] doing[{},{}]... }
  const onDragEnd = (info: DropResult) => {
    //{ destination, draggableId, source }
    console.log(info);
    const { destination, source, draggableId } = info;
    if (!destination) return;
    if (destination.droppableId === source.droppableId) {
      setToDos((oldToDos) => {
        //oldToDos는 객체이다. { todo:[{},{}] doing[{},{}]... }
        const boardCopy = [...oldToDos[source.droppableId]]; //중첩 배열이 되기 때문에 전개연산자로 풀어 배열로 출력
        const taskObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination.index, 0, taskObj);
        return {
          ...oldToDos,
          [source.droppableId]: boardCopy,
        };
      });
    }
    if (destination.droppableId !== source.droppableId) {
      setToDos((oldToDos) => {
        //oldToDos는 객체이다.
        const sourceBoard = [...oldToDos[source.droppableId]]; //중첩 배열이 되기 때문에 전개연산자로 풀어 배열로 출력
        const taskObj = sourceBoard[source.index];
        const destinationBoard = [...oldToDos[destination.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination.index, 0, taskObj);
        return {
          ...oldToDos,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
    // if (destination?.droppableId === source.droppableId) {
    //   setToDos((oldToDos) => {
    //     const boardCopy = [...oldToDos[source.droppableId]]; //중첩 배열이 되기 때문에 전개연산자로 풀어 배열로 출력 || oldToDos[source.droppableId] == 객체 대괄호 표기법|| 예 : (...toDOs['Doing'])
    //     boardCopy.splice(source.index, 1); // source=기존 위치
    //     boardCopy.splice(destination.index, 0, draggableId); // destination: 변경위치
    //     //초기값을 객체로 가지고 있기때문에(atom에 보면 알수있다) return값도 객체여야한다.
    //     return {
    //       ...oldToDos,
    //       [source.droppableId]: boardCopy,
    //     };
    //   });
    // }
    // if (destination?.droppableId !== source.droppableId) {
    //   setToDos((oldToDos) => {
    //     const sourceBoard = [...oldToDos[source.droppableId]]; // 이동한 곳
    //     const destinationBoard = [...oldToDos[destination.droppableId]]; // 이동하고자 하는 곳
    //     sourceBoard.splice(source.index, 1);
    //     destinationBoard.splice(destination.index, 0, draggableId);

    //     return {
    //       ...oldToDos,
    //       [source.droppableId]: sourceBoard,
    //       [destination?.droppableId]: destinationBoard,
    //     };
    //   });
    // }
  };
  return (
    <>
      <GlobalStyle />
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {Object.keys(toDos).map((boardId) => (
              <Board key={boardId} toDos={toDos[boardId]} boardId={boardId} />
            ))}
          </Boards>
        </Wrapper>
      </DragDropContext>
    </>
  );
};

export default App;
