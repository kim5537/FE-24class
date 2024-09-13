import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getFormattedDate, emotionList } from "../util";
import EmotionItems from "./EmotionItems";
import Button from "./Button";

const EditorSection = styled.div`
  margin-bottom: 40px;
  & h4 {
    font-size: 22px;
  }
`;

const Textarea = styled.textarea`
  border: none;
  border-redius: 5px;
  background: #ececec;
  padding: 20px;
  font-size: 20px;
  font-family: "Nanum Pen Script", cursive;
  width: 100%;
  min-height: 200px;
  resize: none;
`;

const Input = styled.input`
  border: none;
  border-redius: 5px;
  background: #ececec;
  padding: 10px 20px;
  font-size: 20px;
  font-family: "Nanum Pen Script", cursive;
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Emotiongroup = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2%;
`;

const Editor = ({ initDate, onSubmit }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 1,
    content: "",
  });
  useEffect(() => {
    if (initDate) {
      setState({
        ...initDate,
        date: getFormattedDate(new Date(parseInt(initDate.date))),
      });
    }
  }, [initDate]);

  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
  };

  const handleChangeContents = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(state);
    // 부모 setState =onSubmit , 여기서 작성된 글 = state
  };

  const handleGoBack = () => {
    navigate(-1); //직전페이지로 이동
  };

  const handleChangeEmotion = (emotionId) => {
    setState({
      ...state,
      emotionId,
    });
  };

  return (
    <div>
      <EditorSection>
        <h4>오늘의 날짜</h4>
        <div>
          <Input type="date" value={state.date} onChange={handleChangeDate} />
        </div>
      </EditorSection>
      <EditorSection>
        <h4>오늘의 감정</h4>

        <Emotiongroup>
          {emotionList.map((it) => (
            <EmotionItems
              key={it.id}
              {...it}
              onClick={handleChangeEmotion}
              isSelectde={state.emotionId === it.id}
            />
          ))}
        </Emotiongroup>
      </EditorSection>
      <EditorSection>
        <h4>오늘의 일기</h4>
        <div>
          <Textarea
            placeholder="오늘은 어땠나요"
            value={state.content}
            onChange={handleChangeContents}
          />
        </div>
      </EditorSection>
      <EditorSection>
        <ButtonGroup>
          <Button text={"취소하기"} onCLick={handleGoBack} />
          <Button text={"작성완료"} type={"positive"} onCLick={handleSubmit} />
        </ButtonGroup>
      </EditorSection>
    </div>
  );
};

export default Editor;
