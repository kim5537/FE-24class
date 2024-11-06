import React, {
  useRef,
  useReducer,
  useCallback,
  useState,
  useEffect,
} from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./style/theme";
import Counter from "./component/Counter";
import Time from "./component/Time";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { type } from "@testing-library/user-event/dist/type";
import WeatherItem from "./component/WeatherItem";

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

const GlobalStyle = createGlobalStyle`
* {
  margin:  0;
  padding: 0;
  box-sizing: border-box;
}
ul , li {
list-style: none;
}
a {
text-decoration: none;
color: inherit;
}

html {
  font-family: "Inter", sans-serif;
}
`;

const Back = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.background};
  /* border: 1px solid transparent; */
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  padding: 30px;
  justify-content: center;
  gap: 10px;
`;

const Main = styled.div`
  height: calc(100vh - 60px);
  width: 500px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background: ${({ theme }) => theme.opacityWhite};
  ${({ theme }) => theme.boxline}
`;

const SidWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      const createResult = [action.newItem, ...state];
      localStorage.clear();
      localStorage.setItem("todo", createResult);
      return createResult;
    }
    case "UPDATE": {
      const updateResult = state.map((it) =>
        it.id === action.targetId ? { ...it, isDone: !it.isDone } : it
      );
      localStorage.clear();
      localStorage.setItem("todo", updateResult);
      return updateResult;
    }
    case "DELETE": {
      const deleteResult = state.filter((it) => it.id !== action.targetId);
      localStorage.clear();
      localStorage.setItem("todo", deleteResult);
      return deleteResult;
    }
    default:
      return state;
  }
};

function App() {
  const [todo, dispatch] = useReducer(reducer, []);
  //todo: 값 || dispatch :  구분을 위한 것 || reducer : 분류 함수 || mocktodo: 초기값
  const idRef = useRef(3);
  let timeMode = new Date().getHours();

  const onCreate = useCallback((content) => {
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
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);

  return (
    <ThemeProvider theme={6 <= timeMode && timeMode < 18 ? theme.am : theme.pm}>
      <GlobalStyle />
      <TodoContext.Provider value={{ todo, onCreate, onUpdate, onDelete }}>
        <Back>
          <Wrapper>
            <Main>
              <Header />
              <TodoEditor onCreate={onCreate} />
              <TodoList />
            </Main>
            <SidWrap>
              <Time />
              <WeatherItem />
              <Counter />
            </SidWrap>
          </Wrapper>
        </Back>
      </TodoContext.Provider>
    </ThemeProvider>
  );
}

export default App;
