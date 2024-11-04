import { atom } from "recoil";

interface ToDoState {
  [key: string]: string[];
}

export const toDoState = atom<ToDoState>({
  key: "toDo",
  default: {
    ToDo: ["리액트복습", "노드공부", "next,js복습"],
    Doing: ["영화보기", "일기쓰기"],
    Done: ["운동하기"],
  },
});

//배열이 가장 좋은 형태이다.
//{
//todo:[]
//doing:[]
//done:[]
// }
