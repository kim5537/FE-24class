import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Header = styled.div`
  font-size: 40px;
  color: #743826;
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
    border: 4px solid #743826;
  }
`;

const style = {
  background: "#743826",
  border: "none",
  padding: "10px",
  color: "#fff",
};

const ButtonWrap = styled.div`
  button {
    width: 400px;
    font-size: 18px;
    ${style}
  }
  @media screen and (max-width: 780px) {
    flex-direction: column;
    button {
      width: 360px;
      font-size: 18px;
      ${style}
    }
  }
  @media screen and (max-width: 360px) {
    flex-direction: column;
    button {
      width: 280px;
      font-size: 18px;
      ${style}
    }
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
