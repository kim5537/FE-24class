import { createContext, useState } from "react";

//보내줄 값의 대한 타입 정의 역할 ==> 이런 타입이고
interface Context {
  todoList: string[];
  onAdd: (todo: string) => void;
  onDelete: (todo: string) => void;
}

//자식 요소들에게 보내줄 값에 대한 정의 역할 ==> 이런 형태야.
const TodoListContext = createContext<Context>({
  todoList: [],
  onAdd: (): void => {},
  onDelete: (): void => {},
});

//실제 자식요소들에게 값을 전달할 역할을 할 컨포넌트 함수 정의
interface Props {
  children: JSX.Element | JSX.Element[];
}

const TodoListContextProvider = ({ children }: Props) => {
  const [todoList, setTodoList] = useState([
    "TypeScript 복습하기",
    "Next.js 예습하기",
    "Node.js 예습하기",
  ]);

  const onAdd = (toDo: string) => {
    setTodoList([toDo, ...todoList]);
  };

  const onDelete = (todo: string) => {
    setTodoList(todoList.filter((item) => item !== todo));
  };

  return (
    <TodoListContext.Provider value={{ todoList, onAdd, onDelete }}>
      {children}
    </TodoListContext.Provider>
  );
};

export { TodoListContext, TodoListContextProvider };

//TodoListContextProvider = 자식요소로 컴포넌트를 받아야하기 때문에 children을 만듬
//실제 값 TodoListContex 을 넣음
