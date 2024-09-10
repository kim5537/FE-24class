import React, { useContext } from "react";
import "./TodoItem.css";
import { TodoContext } from "../App";

const TodoItem = ({ id, isDone, content, createdDate }) => {
  // console.log(`${id} TodoItem 업데이트`);
  const { onUpdate, onDelete } = useContext(TodoContext);

  const onChangeCheckBox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <div className="ceckbox_col">
        <input checked={isDone} type="checkbox" onChange={onChangeCheckBox} />
      </div>
      <div className="title_col"> {content} </div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};

export default React.memo(TodoItem);
//editor 컴포넌트 => 값이 신규 입력 > App컴포터는 업데이트  > 함수역시 리렌더링된다. >>app(부모)가 만든 함수들을 전달 받았기 때문에 고차컨퍼넌트가 되어도 리랜더링된다.
