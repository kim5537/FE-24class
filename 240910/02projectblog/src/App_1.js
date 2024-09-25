import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const baseShadow = css`
  /* box-shadow: ${(props) => `0px 10px 6px ${props.color || "red"}`}; */
  box-shadow: ${({ color }) => `0px 10px 6px ${color || "red"}`};
`;

const font = ({ color, size, family }) => `
color: ${color || "red"},
font-size: ${size || "1rem"}
font-famail: ${family || "serif"}
`;

const Container = styled.div`
  font-size: 2rem;
  width: 50%;
  background: #ccc;
  margin: 0 auto;
  padding: 10px 20px;
  ${baseShadow}
  ${font({ color: "green", size: "2rem" })}
`;

function App() {
  return (
    <Wrapper>
      <Container color="purple">Styled Component</Container>
    </Wrapper>
  );
}

export default App;
