import React, { useRef, useReducer, useCallback } from "react";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import styled, { ThemeProvider } from "styled-components";
import theme from "./style/theme";

//생성
export const TodoContext = React.createContext();

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
    content: "JavaScript 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "여행가기",
    createdDate: new Date().getTime(),
  },
];

const Appcss = styled.div`
  width: 500px;
  margin: 30px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-shadow: 0 0 10px #ccc;
`;

const reducer = (state, action) => {};

function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        isDone: false,
        content,
        createdDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  };

  return (
    <ThemeProvider theme={theme}>
      <Appcss>
        <Header />
        <TodoContext.Provider>
          <TodoEditor onCreate={onCreate} />
          <TodoList />
        </TodoContext.Provider>
      </Appcss>
    </ThemeProvider>
  );
}

export default App;
