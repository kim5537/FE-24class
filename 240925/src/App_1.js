import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

// 2파일삭제댐.. ㅠㅠ 나중에 깃허브 확인

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
