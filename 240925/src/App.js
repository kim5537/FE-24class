import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const baseShadow = `box-shadow:0 10px 6px #777`;
//가변적으로 변경할 방법은

const Container = styled.div`
  font-size: 2rem;
  width: 50%;
  background: #ccc;
  margin: 0 auto;
  padding: 10px 20px;
  ${baseShadow}
`;

function App() {
  return (
    <Wrapper>
      <Container>Styled Component</Container>
    </Wrapper>
  );
}

export default App;
