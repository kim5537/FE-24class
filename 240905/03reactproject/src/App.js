import "./App.css";
import { useState, useRef } from "react";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Java Script 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "여행가기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);
  const onCreate = (content) => {
    //content의 역할은 input태그 안에 적은 텍스트값이다.
    const newItem = {
      id: idRef.current,
      isDone: false,
      //content: content// 이름이랑 같기때문에 하나로 씀
      content,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]); //새로운 데이터 , 기존 데이터를 전개연산자로 하나의 배열로 만듬.
    idRef.current += 1; // 아이디 증가하게
  };
  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} />
    </div>
  );
}

export default App;
