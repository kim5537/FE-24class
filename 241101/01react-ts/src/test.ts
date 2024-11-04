import { atom } from "recoil";

const x = ["a", "b", "c", "d", "e"];

//위치 변경을 쪼개서 생각해보자.
//a를 cd 사이에 넣는다면

x.splice(0, 1);
//시작 인덱스 , 개수 , 대체될 요소.
//x.slice(시작인댁스 , 미만 인덱스) = 같음
//현 상태 ["b", "c", "d", "e"]
x.splice(2, 0, "a");
// 현 상태 ["b", "c", "a" ,d", "e"]
//splice == 원본 데이터를  바꿈

const toDos = {
  x: ["a", "b"],
  y: ["c", "d"],
};

// object.keys(toDos);
//["a","b"]
// object.values(toDos);
//[ x의 배열 , y의 배열

// toDos[0]=>["a", "c"]
// [0]=>["a", "c"]

// 객체 안 키값을 배열로 한다 음에 배열에 정의한 키값을 대괄호 표기법을 가져온다.
