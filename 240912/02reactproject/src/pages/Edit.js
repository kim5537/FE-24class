import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import Header from "../component/Header";
import Button from "../component/Button";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = useDiary(id);

  const { onDelete } = useContext(DiaryDispatchContext);

  const goBack = () => {
    navigate(-1);
  };
  const onClickDelete = () => {
    if (window.confirm("일기를 삭제하겠습니까? (복구불가)")) {
      onDelete(id);
      navigate("/");
    }
  };

  if (!data) {
    return <div>일기를 불러오고 있습니다.</div>;
  } else {
    return (
      <div>
        <Header
          leftChild={<Button text={"< 뒤로가기"} onCLick={goBack} />}
          title={"일기 수정하기"}
          rightChild={
            <Button
              text={"삭제하기"}
              type={"negative"}
              onCLick={onClickDelete}
            />
          }
        />
      </div>
    );
  }
};

export default Edit;
