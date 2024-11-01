import React from "react";
import styled from "styled-components";
import { basket } from "../style/Icon";

const Wapper = styled.div`
  height: 68px;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.maincolor};
  border-radius: 10px;
  margin-bottom: 10px;
`;

// const Todo = styled.div`
//   height: 60px;
//   display: flex;
//   align-content: center;
//   justify-content: space-between;
//   background: ${({ theme }) => theme.opacityWhite};
//   border: 1px solid ${({ theme }) => theme.basecolor};
//   border-radius: 10px;
//   padding: 10px;
//   margin: 3px;
// `;

// const Input = styled.input`
//   width: 20px;
//   height: 20px;
//   appearance: none;
//   border: 1px solid #ccc;
//   border-radius: 50px;
//   &:checked {
//     border: 1px solid #ffc878;
//     background-color: #ffc878;
//   }
// `;

// const TextItem = styled.div`
//   height: 40px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 6px;
// `;
// const Button = styled.button`
//   border: none;
//   border-radius: 10px;
//   padding: 10px 20px;
//   background: ${({ theme }) => theme.basecolor};
//   color: ${({ theme }) => theme.linecolor};
// `;

const Todo = styled.div``;

const Input = styled.input``;

const Labale = styled.label``;

const TextItem = styled.div``;

const Button = styled.button``;

const TodoItem = () => {
  return (
    <div>
      <Wapper>
        <p>
          <Input type="checkbox" />
          <Labale>
            <basket />
          </Labale>
        </p>
        <Todo>
          <TextItem>item</TextItem>
          <Button>삭제</Button>
        </Todo>
      </Wapper>
    </div>
  );
};

export default TodoItem;
