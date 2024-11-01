import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState, Categories } from "../Atom";

const Container = styled.li`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 5px;
`;
const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 4px 8px;
  cursor: pointer;
`;

//  [
//   {
//     id: 1730427236885,
//     text: "우솝",
//     category: "TODO",
//   },
//   {
//     id: 1730426624703,
//     text: "루피",
//     category: "TODO",
//   },
//   {
//     id: 1730426623892,
//     text: "나미",
//     category: "TODO",
//   },
//   {
//     id: 1730426621220,
//     text: "짱구",
//     category: "TODO",
//   },
// ];

// 망고의 값을 감ㅁ으로 교체
// const food = ["pizza", "mango", "kimchi", "kimbab"];
// const front = ["pizza"];
// const back = ["kimchi", "kimbab"];
// const final = [...front, "gam", ...back];
// console.log(final);

// const target = 1;
// const front0 = food.slice(0, 1);
// const back0 = food.slice(target + 1);
// const final0 = [...front0, "gam", ...back0];
// console.log(final0);

const ToDo = ({ id, text, category }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(`I Wanna go to ${event.currentTarget.name}`);
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      //findIndex : 우리가 찾고자하는 요소의 인덱스를 가져온다.

      // const oldToDo = oldToDos[targetIndex];
      const newToDo = { id, text, category: name as any };
      // console.log(oldToDo, newToDo);

      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ]; //useSetRecoilState()는 배열의 값(원 데이터의 형식)을 반환 해야한다.
    });
  };
  return (
    <Container>
      <span>{text}</span>
      <ButtonGroup>
        {category !== Categories.TODO && (
          <Button name={Categories.TODO} onClick={onClick}>
            ToDo
          </Button>
        )}
        {category !== Categories.DOING && (
          <Button name={Categories.DOING} onClick={onClick}>
            Doing
          </Button>
        )}
        {category !== Categories.DONE && (
          <Button name={Categories.DONE} onClick={onClick}>
            Done
          </Button>
        )}
      </ButtonGroup>
    </Container>
  );
};

export default ToDo;
