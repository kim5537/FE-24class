import React, { useState, useMemo, useContext } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";
import { TodoContext } from "../App";

const TodoList = () => {
  const { todo = [] } = useContext(TodoContext);
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
  }, [todo]);

  const { totalCount, doneCount, notDoneCount } = analyzeTodo;
  return (
    <div className="TodoList">
      <h4>Todo List 📚</h4>
      <div>
        <div>총 개수 : {totalCount}</div>
        <div>완료 : {doneCount}</div>
        <div>진행중 : {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        className="SearchBar"
        placeholder="검색어를 입력 하세요"
      />
      <div className="list_Wrapper">
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

// TodoList.defaultProps = {
//defaultProps 함수는 사라질 것.
//   todo: {},
//그래서 기본매개변수를 줬다 { todo = [] } 이렇게 수정한 것.
// };

export default TodoList;
//{todo.map((it) => (<div>{it.content}</div>))}
// map(()=>{}) 중괄호일땐 함수를 가져오지만 위 처럼 () 소괄호면 값을 가져온다. --> 그러나 우린 해당값을 TodoItem에 보내야한다.
