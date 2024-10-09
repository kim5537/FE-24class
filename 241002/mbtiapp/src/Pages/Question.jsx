import React, { useState } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import styled from "styled-components";
import { QuestionData } from "../assets/questiondata";
import { createSearchParams, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Title = styled.div`
  font-size: 30px;
  width: 600px;
  text-align: center;
  margin-bottom: 20px;
  padding: 8px 16px;
  background: #743826;
  border-radius: 8px;
  @media screen and (max-width: 780px) {
    width: 300px;
    font-size: 24px;
  }
  @media screen and (max-width: 360px) {
    width: 260px;
    font-size: 18px;
  }
`;

const style = {
  background: "#a0663f",
  border: "none",
  padding: "10px",
};

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  button {
    width: 400px;
    height: 200px;
    font-size: 18px;
    ${style}
  }
  @media screen and (max-width: 780px) {
    flex-direction: column;
    button {
      width: 300px;
      height: 150px;
      font-size: 16px;
      ${style}
    }
  }
  @media screen and (max-width: 360px) {
    flex-direction: column;
    button {
      width: 260px;
      height: 100px;
      font-size: 14px;
      ${style}
    }
  }
`;

function Question() {
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);

  const navigate = useNavigate();

  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) =>
      //s 는 객체형태이다.
      s.id === type ? { id: s.id, score: s.score + no } : s
    );
    setTotalScore(newScore);

    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
        // search ==> 쿼리스트링을 지정 -- 키와 밸류가 있어야 한다.
      });
    }
  };

  return (
    <>
      <ProgressBar
        striped
        variant="danger"
        now={(questionNo / QuestionData.length) * 100}
      />
      <Wrapper>
        <Title>{QuestionData[questionNo].title}</Title>
        <ButtonGroup>
          <Button
            onClick={() => handleClickButton(1, QuestionData[questionNo].type)}
            variant="light"
          >
            {QuestionData[questionNo].answera}
          </Button>
          <Button
            onClick={() => handleClickButton(0, QuestionData[questionNo].type)}
            variant="light"
          >
            {QuestionData[questionNo].answerb}
          </Button>
        </ButtonGroup>
      </Wrapper>
    </>
  );
}

export default Question;
