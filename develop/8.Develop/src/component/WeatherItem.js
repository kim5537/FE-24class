import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 230px;
  height: 153px;
  padding: 10px;
  ${({ theme }) => theme.boxline}
  background: ${(props) => props.theme.opacityWhite};
`;

const WeatherItem = () => {
  return <Wrapper>WeatherItem</Wrapper>;
};

export default WeatherItem;
