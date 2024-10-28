import React, { useContext, useState } from "react";
import Todoinput from "./Todoinput";
import ShowInputButton from "./ShowInputButton";

// interface Props {
//   onAdd: (todo: string) => void;
// }

const InputContainer = () => {
  const [showTodoInput, setshowTodoInput] = useState(false);
  // const { onAdd } = useContext(TodoListContext);

  const onClose = () => {
    //버튼은 인자값을 가질 수 없기 때문에 따로 정의
    // onAdd(todo);
    setshowTodoInput(false);
  };

  return (
    <>
      {showTodoInput && <Todoinput onClose={onClose} />}
      <ShowInputButton
        show={showTodoInput}
        onClick={() => setshowTodoInput(!showTodoInput)}
      />
    </>
  );
};

export default InputContainer;
