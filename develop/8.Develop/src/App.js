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
  border-radius: 15px;
`;

const SidWrap = styled.div``;

const reducer = (state, action) => {};

function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);
  const [isDark, setIsdark] = useState(false);
  let timeMode = new Date().getHours();
  console.log(timeMode);
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
  //6 <= timeMode <= 18
  //6 <= timeMode <= 18

  return (
    <ThemeProvider theme={6 <= timeMode <= 18 ? theme.am : theme.pm}>
      <GlobalStyle />
      <TodoContext.Provider>
        <Back>
          <Wrapper>
            <Main>
              <Header />
              <TodoEditor onCreate={onCreate} />
              <TodoList />
            </Main>
            <SidWrap>
              <Time />
              <Counter />
            </SidWrap>
          </Wrapper>
        </Back>
      </TodoContext.Provider>
    </ThemeProvider>
  );
}

export default App;
