import React from "react";
import styled from "styled-components";

const Container = styled.input`
  font-size: 18px;
  padding: 8px;
`;

interface Props {
  value: string;
  onChange: (text: string) => void;
}

const TextInput = ({ value, onChange }: Props) => {
  return <Container value={value} onChange={(e) => onChange(e.target.value)} />;
};

export default TextInput;

//onChange//이벤트헨들러 ={(e) => onChange//부모에게 받은 함수(e.target.value)}
