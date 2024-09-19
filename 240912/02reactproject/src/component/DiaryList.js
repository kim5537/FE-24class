import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import DiaryItem from "./DiaryItem";

const Wrapper = styled.div``;

const DiaryContents = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 30px;
  gap: 10px;
`;

const LeftContent = styled.div`
  flex: 1;
`;

const RightContent = styled.div`
  flex: 3;
  & button {
    width: 100%;
  }
`;

const Select = styled.select`
  background: #ececec;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  font-family: "Nanum Pen Script", cursive;
  cursor: pointer;
`;

const ListContents = styled.div``;

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const DiaryList = ({ data }) => {
  // option 태그를 일일히 안 만들고 map을 통해 만들기 위한 state
  const [sortType, setSortType] = useState("latest");
  // select로 필터된 일기 리스트 표기 state
  const [sortedData, setSortedData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    };
    //sort는 원본 데이터를 변형함
    const copyList = JSON.parse(JSON.stringify(data));
    //하나의 문법. 제이슨으로 만들었다가 다시 끌어와서 새로운 데이터로 만듬
    copyList.sort(compare);
    // const copyList = [...data]; // 왜 전개연산자는 안되는 걸까
    //배열안의 값을 꺼내는 전개연산자이기 때문에 이차원(배열안에 객체)이상의 즉 중첩데이터는 불가능하다. 즉 배열안 객체의 값에 영향을 미치게 된다.
    setSortedData(copyList);
  }, [data, sortType]);
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };
  const onClickNew = () => {
    navigate("/new");
  };
  return (
    <Wrapper>
      <DiaryContents>
        <LeftContent>
          <Select value={sortType} onChange={onChangeSortType}>
            {sortOptionList.map((it, idx) => (
              <option key={idx} value={it.value}>
                {it.name}
              </option>
            ))}
          </Select>
        </LeftContent>
        <RightContent>
          <Button
            type={"positive"}
            text={"새 일기 작성"}
            onCLick={onClickNew}
          />
        </RightContent>
      </DiaryContents>
      <ListContents>
        {sortedData.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </ListContents>
    </Wrapper>
  );
};

export default DiaryList;
