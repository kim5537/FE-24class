import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";

const New = () => {
  //app에 있는 함수를 provider로 보내고 new컴포넌트에서 context로 받은 것.
  const { onCreate } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goHome = () => {
    navigate("/");
  };
  const onSubmit = (data) => {
    const { date, content, emotionId } = data;
    onCreate(date, content, emotionId);
    navigate("/");
  };

  return (
    <div>
      <Header
        leftChild={<Button text={"< 뒤로가기"} onCLick={goBack} />}
        title={"새 일기 작성"}
        rightChild={<Button text={"Home "} onCLick={goHome} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
