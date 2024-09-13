import React from "react";
import styled from "styled-components";

const ButtonItem = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 30px;
  font-family: "Nanum Pen Script", cursive;
  cursor: pointer;
  ${({ type }) =>
    type === "positive"
      ? `background: #64c964; color: #fff;`
      : type === "negative"
      ? `background: #fd565f; color: #fff;`
      : `background: #ccc; color: #000;`};
`;
/// ButtonItem type={type}로 styled 컴포넌트에게 값을 프롭스함// 객체로 들어오니까 구조분해할당

const Button = ({ text, type, onCLick }) => {
  console.log(text, type);
  //객체로 들어왔으니 구조분해할당
  return (
    <div>
      <ButtonItem onClick={onCLick} type={type}>
        {text || "button"}
      </ButtonItem>
    </div>
  );
};

export default Button;
