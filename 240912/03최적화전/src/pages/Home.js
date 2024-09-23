// import React from "react";
// import { useSearchParams } from "react-router-dom";
// const Home = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   console.log(searchParams.get("sort"));
//   //인스턴스객체이다 (지정하지 않은 객체명이 있음) - 원부모가 나오고 부모의 메서드 함수를 사용 할 수 있다. == get은 해당 키의 밸류값을 찾아주는 함수이다.(우리가 주소를 /?sort=latest 이렇게 씀)
//   return <div>Home Page</div>;
// };

// export default Home;

import React, { useState, useEffect, useContext } from "react";
import { DiaryStateContext } from "../App";
import Header from "../component/Header";
import Button from "../component/Button";
import DiaryList from "../component/DiaryList";
import { getMonthRangeByDate } from "../util";

const Home = () => {
  const data = useContext(DiaryStateContext);
  // console.log(data);
  //목업데이터(일기)가 배열내 객체형태로 들어가 있음

  //해더에 띄울 년도와 월 출력을 위한 state
  const [pivotDate, setPivotDate] = useState(new Date());

  //출력할 데이터(일기) 업데이트를 위한 usestart ,년월에 따라 해당되는 일기를 찾기워한 것, 배열 형태이기 때문에 초기값 빈배열 []
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      // console.log(beginTimeStamp, endTimeStamp);
      setFilteredData(
        data.filter(
          (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [data, pivotDate]);

  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  }월`;
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };
  return (
    <div>
      <Header
        leftChild={<Button text={"<"} onCLick={onDecreaseMonth} />}
        title={headerTitle}
        rightChild={<Button text={">"} onCLick={onIncreaseMonth} />}
      />
      <DiaryList data={filteredData} />
    </div>
  );
};

export default Home;
