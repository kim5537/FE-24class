import React, {
  useRef,
  useReducer,
  useCallback,
  useState,
  useEffect,
} from "react";
import styled, { ThemeProvider } from "styled-components";
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

const Back = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.background};
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  margin: 30px auto;
  justify-content: center;
  gap: 10px;
`;

const Main = styled.div`
  width: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  ${({ theme }) => theme.boxline}
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

  return (
    <ThemeProvider theme={timeMode > 6 && timeMode < 18 ? theme.am : theme.pm}>
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
