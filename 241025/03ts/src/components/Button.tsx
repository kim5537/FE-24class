import React from "react";
import styled from "styled-components";

const Container = styled.button`
  border: none;
  background: #ff5722;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: #ff572270;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
  //propst는 객체이다.
  label: string;
  onClick: () => void;
  //반환값이 없이 그냥 기능만 줄 것.
}

// const Button = (props: Props) => {
//   return <Container onClick={props.onClick}>{props.label}</Container>;
// };
const Button = ({ label, onClick }: Props) => {
  return <Container onClick={onClick}>{label}</Container>;
};

export default Button;
