import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/resultData";
import KakakoSHareButton from "../components/KakakoSHareButton";

const Wrapper = styled.div`
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Header = styled.div`
  font-size: 40px;
  color: #000000;
  margin-bottom: 20px;
  @media screen and (max-width: 780px) {
    margin-bottom: 16px;
    font-size: 30px;
  }
  @media screen and (max-width: 360px) {
    margin-bottom: 16px;
    font-size: 28px;
  }
`;

const Contents = styled.div`
  width: 500px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 30px 20px;
  border-radius: 10px;
  background: #ffffff90;
  @media screen and (max-width: 780px) {
    width: 400px;
    height: 600px;
  }
  @media screen and (max-width: 360px) {
    width: 300px;
    height: 400px;
  }
`;

const Title = styled.div`
  font-size: 30px;
  margin: 20px 0 10px;
  color: #793b02;
  @media screen and (max-width: 780px) {
    font-size: 24px;
  }
  @media screen and (max-width: 360px) {
    font-size: 18px;
  }
`;

const LogoImg = styled.div`
  & > img {
    width: 350px;
    height: 350px;
    border: 4px solid #743826;
    @media screen and (max-width: 780px) {
      width: 300px;
      height: 300px;
    }
    @media screen and (max-width: 360px) {
      width: 180px;
      height: 180px;
    }
  }
`;

const Desc = styled.div`
  margin: 10px 0;
  font-size: 20px;
  color: #a0663f;
  padding: 10px;
  @media screen and (max-width: 780px) {
    font-size: 18px;
  }
  @media screen and (max-width: 360px) {
    font-size: 16px;
  }
`;

const style = {
  background: "#a0663f",
  border: "none",
  padding: "10px",
  color: "#fff",
};

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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

const Result = () => {
  const [resultDate, setResultData] = useState({});
  //객체인 이유. 우리는  보낸 데이터는 객체에 대한 토탈값을 가져올 것이기 때문 - 해당 객체만 가져와서 대조되는 값을 뿌려줄 것
  const [searchparams] = useSearchParams();
  // console.log(test);
  // console.log(searchparams);
  const mbti = searchparams.get("mbti");
  // console.log(mbti);

  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/");
  };
  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  // console.log(resultDate);
  return (
    <Wrapper>
      <Header> 예비집사 판별기 </Header>
      <Contents>
        <Title>{resultDate.name}</Title>
        <LogoImg>
          <img src={resultDate.image} className="rounded-circle" />
        </LogoImg>
        <Desc>
          예비 집사님과 찰떡 궁합인 고양이는!!! <br /> {resultDate.best}와
          어울리는
          {resultDate.name}
        </Desc>
        <ButtonWrap>
          <Button onClick={handleClickButton} variant="light">
            테스트 다시하기
          </Button>
          <KakakoSHareButton data={resultDate} />
        </ButtonWrap>
      </Contents>
    </Wrapper>
  );
};

export default Result;
