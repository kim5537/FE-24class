import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Header = styled.div`
  font-size: 40px;
  color: #cc5a52;
`;

const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  margin: 20px 0 10px;
`;

const LogoImg = styled.div`
  & > img {
    width: 350px;
    height: 350px;
    border: 4px solid #cc5a52;
  }
`;

const style = {
  background: "#d89292",
  border: "none",
  padding: "10px",
};

const ButtonWrap = styled.div`
  button {
    width: 400px;
    font-size: 18px;
    ${style}
  }
`;

const Desc = styled.div`
  margin: 10px 0;
  font-size: 20px;
`;

const Home = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/question");
  };
  return (
    <Wrapper>
      <Header> 예비집사 판별기 </Header>
      <Contents>
        <Title>나에게 맞는 집사는?</Title>
        <LogoImg>
          <img src="/cat/ggompang.jpeg" className="rounded-circle" />
        </LogoImg>
        <Desc>MBTI를 기반으로 나랑 잘 맞는 고양이</Desc>
        <ButtonWrap>
          <Button onClick={handleClickButton} variant="light">
            {" "}
            테스트 시작하기{" "}
          </Button>
        </ButtonWrap>
      </Contents>
    </Wrapper>
  );
};

export default Home;
