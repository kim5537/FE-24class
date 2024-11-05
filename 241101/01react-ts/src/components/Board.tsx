import React, { useRef } from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import { useForm } from "react-hook-form";
import { ToDo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

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

const Area = styled.div<AreaProps>`
  width: 100%;
  /* background: dodgerblue; */
  background: ${(props) =>
    props.isDraggingOver
      ? "Pink"
      : props.isDraggingFromThis
      ? "crimson"
      : "dodgerblue"};
  padding: 10px;
  border-radius: 8px;
  transition: background 0.3s;
`;

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  border-radius: 8px;
`;

interface AreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

interface BoardProps {
  toDos: ToDo[];
  boardId: string;
}

interface FormProps {
  toDo: string;
}

const Board = ({ toDos, boardId }: BoardProps) => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<FormProps>();
  const onVaild = ({ toDo }: FormProps) => {
    const newTodo = {
      id: Date.now(),
      text: toDo,
    };

    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [newTodo, ...allBoards[boardId]],
      };
    });
    setValue("toDo", "");
  };
  // const inputRef = useRef<HTMLInputElement>(null);
  // // console.log(inputRef);
  // const onClick = () => {
  //   inputRef.current?.focus();
  //   setTimeout(() => {
  //     inputRef.current?.blur();
  //   }, 5000);
  // };
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      {/* <input ref={inputRef} type="text" placeholder="Please..." />
      <button onClick={onClick}>Click</button> */}
      <Form onSubmit={handleSubmit(onVaild)}>
        <Input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add Task On ${boardId}`}
        />
      </Form>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          //snapshot 마우스 우클릭후 형식정의로이동하면 내부 속성을 볼 수 있다.
          //isDraggingOver : 새로운 곳에 도착하면 true를 출력
          // draggingFromThisWith : 원래 있던 위치에서 출발했는지 확인하는 속성 --> 우리는 todo doing 으로 해서 원래는 string | null | undefinde의 값을 가진다. ==> 이걸 boolean으로 형변환 Boolean()
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard
                key={toDo.id}
                toDoId={toDo.id}
                toDoText={toDo.text}
                index={index}
              />
            ))}
            {magic.placeholder}
            {/* 요소가 빠질때마다 보드의 사이즈가 변경되는 것을 막아주는것 */}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
};
export default Board;
