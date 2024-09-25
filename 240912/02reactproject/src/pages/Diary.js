import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../component/Header";
import Button from "../component/Button";
import Viewer from "../component/Viewer";
import { getFormattedDate, setPageTitle } from "../util";

const Diary = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  //동적 파라미터를 :id로 app에서 설정했기 때문에 id키값을 가짐
  const data = useDiary(id);
  // useDiary는 작성한 하나의 다이어리이다. 지정된 다이어리 하나를(배열로 각각 id를 가짐) data에 넣음

  useEffect(() => {
    setPageTitle(`${id}일기의 나의 감정!`);
  });
  if (!data) {
    return <div>일기장를 가져오는 중…📔</div>;
  } else {
    const goBack = () => {
      navigate(-1);
    };
    const goEdit = () => {
      navigate(`/edit/${id}`);
    };
    const { date, emotionId, content } = data;
    const title = `${getFormattedDate(new Date(parseInt(date)))} 일기`;
    return (
      <div>
        <Header
          leftChild={<Button text={"< 뒤로가기"} onCLick={goBack} />}
          title={title}
          rightChild={<Button text={"수정하기"} onCLick={goEdit} />}
        />
        <Viewer content={content} emotionId={emotionId} />
      </div>
    );
  }
};

export default Diary;
