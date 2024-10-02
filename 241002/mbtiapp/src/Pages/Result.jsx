import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/resultData";

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
  margin-bottom: 20px;
`;

const Contents = styled.div`
  width: 600px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 30px 20px;
  border-radius: 10px;
  background: #ffffff90;
`;

const Title = styled.div`
  font-size: 30px;
  margin: 20px 0 10px;
  color: #793b02;
`;

const LogoImg = styled.div`
  & > img {
    width: 350px;
    height: 350px;
    border: 4px solid #cc5a52;
  }
`;

const Desc = styled.div`
  margin: 10px 0;
  font-size: 20px;
  color: #cc5a52;
  padding: 10px;
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

  console.log(resultDate);
  return (
    <Wrapper>
      <Header> 예비집사 판별기 </Header>
      <Contents>
        <Title>{resultDate.name}</Title>
        <LogoImg>
          <img src={resultDate.image} className="rounded-circle" />
        </LogoImg>
        <Desc>
          예비 집사님과 찰떡 궁합인 고양이는 {resultDate.best}와 어울리는
          {resultDate.name}
        </Desc>
        <ButtonWrap>
          <Button onClick={handleClickButton} variant="light">
            테스트 다시하기
          </Button>
        </ButtonWrap>
      </Contents>
    </Wrapper>
  );
};

export default Result;
