// 감정 일기 아이콘
import emotion1 from "./emotion/emotion1.png";
import emotion2 from "./emotion/emotion2.png";
import emotion3 from "./emotion/emotion3.png";
import emotion4 from "./emotion/emotion4.png";
import emotion5 from "./emotion/emotion5.png";

export const gatEmotionImgById = (emotionId) => {
  const targetEmotionId = String(emotionId);
  switch (targetEmotionId) {
    case "1":
      return emotion1;
    case "2":
      return emotion2;
    case "3":
      return emotion3;
    case "4":
      return emotion4;
    case "5":
      return emotion5;
    default:
      return null;
  }
};

//날자 출력과 날짜 한자리수 일 때 앞에 0 넣기
export const getFormattedDate = (targetDate) => {
  const year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;

  return `${year}-${month}-${date}`;
};

//감정
export const emotionList = [
  {
    id: 1,
    name: "완전좋음",
    img: gatEmotionImgById(1),
  },
  {
    id: 2,
    name: "좋음",
    img: gatEmotionImgById(2),
  },
  {
    id: 3,
    name: "그럭저럭",
    img: gatEmotionImgById(3),
  },
  {
    id: 4,
    name: "나쁨",
    img: gatEmotionImgById(4),
  },
  {
    id: 5,
    name: "끔찍함",
    img: gatEmotionImgById(5),
  },
];

// home에 사용할 날자에 맞는 일기 필터
export const getMonthRangeByDate = (date) => {
  const beginTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();
  // 년, 월, 일, 시,분,초

  const endTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();
  //다음 달 0일이라는 가상의 일을 만들어서 애매하게 걸치는 일에 작성된 데이터를 전 달에 마지막날에 작성한 것으로넣음
  return { beginTimeStamp, endTimeStamp };
};
