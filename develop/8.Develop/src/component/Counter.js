import React, { useContext, useMemo } from "react";
import styled from "styled-components";
import { TodoContext } from "../App";

const Wrapper = styled.div`
  width: 230px;
  height: 280px;
  padding: 10px 15px;
  ${({ theme }) => theme.boxline}
  background: ${(props) => props.theme.opacityWhite};
`;

const Title = styled.div`
  text-align: center;
  /* line-height: 50px; */
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.linecolor};
  font-weight: 600;
  color: ${(props) => props.theme.linecolor};
`;

const TextWrapper = styled.div`
  width: 180px;
  height: calc(100% - 70px);
  margin: 30px auto 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  font-weight: 600;
  color: ${(props) => props.theme.linecolor};
`;

const CounterWrap = styled.div`
  width: 140px;
`;

const DotoItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Number = styled.div`
  font-weight: 400;
`;

const Counter = () => {
  const { todo } = useContext(TodoContext);

  const counterTodo = useMemo(() => {
    const allCouter = todo.length;
    const doneCounter = todo.filter((it) => it.isDone).length;
    const doingCounter = allCouter - doneCounter;
    return { allCouter, doingCounter, doneCounter };
  }, [todo]);

  const { allCouter, doingCounter, doneCounter } = counterTodo;

  return (
    <Wrapper>
      <Title>나의 달성률은?</Title>
      <TextWrapper>
        <CounterWrap>
          <DotoItem>
            전체 개수<Number>{allCouter}개</Number>
          </DotoItem>
        </CounterWrap>
        <CounterWrap>
          <DotoItem>
            미완료 개수 <Number>{doingCounter}개</Number>
          </DotoItem>
        </CounterWrap>
        <CounterWrap>
          <DotoItem>
            완료 개수 <Number>{doneCounter}개</Number>
          </DotoItem>
        </CounterWrap>
      </TextWrapper>
    </Wrapper>
  );
};

export default Counter;
