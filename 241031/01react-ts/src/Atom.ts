import { atom, selector } from "recoil";

export enum Categories {
  "TODO" = "TODO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

type categories = "TODO" | "DOING" | "DONE";

export interface IToDo {
  id: number;
  text: string;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TODO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [], // 투두라는 이름의  식별자를 가진 애는 배열의 형태를 가질 거라고 정의 한 것.
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    //get은 함수이다.
    //이름을 짓고 실행 함수를 만드는데 이때 참조변수는 실행 함수이다. 실제로 바꿀 대상을 찾아오는 함수의 역할을 한다.
    const toDos = get(toDoState);
    const category = get(categoryState);
    // if (category === "TODO") {
    //   return toDos.filter((toDo) => toDo.category === "TODO");
    // } else if (category === "DOING") {
    //   return toDos.filter((toDo) => toDo.category === "DOING");
    // } else if (category === "DONE") {
    //   return toDos.filter((toDo) => toDo.category === "DONE");
    // }
    return toDos.filter((toDo) => toDo.category === category);
  },
});

//카테고리가 정의 되는 최초의 타입은 string이다. 하지만  사용자의 이벤트에 따라 서로소 유니온 타입으로 정의 해 두얶다.
