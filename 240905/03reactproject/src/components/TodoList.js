import React, { useState } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todo }) => {
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
  return (
    <div className="TodoList">
      <h4>Todo List 📚</h4>
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

export default TodoList;
//{todo.map((it) => (<div>{it.content}</div>))}
// map(()=>{}) 중괄호일땐 함수를 가져오지만 위 처럼 () 소괄호면 값을 가져온다. --> 그러나 우린 해당값을 TodoItem에 보내야한다.
