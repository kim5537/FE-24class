import React from "react";
import styled from "styled-components";

interface ContainerProps {
  //부모이게 받은 color = "#ff5722"에 color
  color: string;
  //문법: 제네릭형식으로 스타일 컴포넌트에게 넣는다.
}

const Container = styled.button<ContainerProps>`
  border: none;
  border-radius: 4px;
  background: ${({ color }) => color};
  color: #fff;
  padding: 8px 15px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: ${({ color }) => color};
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(225, 0, 0, 0.2);
  }
`;

interface Props {
  label: string;
  color?: string;
  onClick?: () => void;
}

const Button = ({ label, color = "#ff5722", onClick }: Props) => {
  return (
    <Container color={color} onClick={onClick}>
      {label}
    </Container>
  );
};

export default Button;
