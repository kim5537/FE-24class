// java script ES6 혼종
//map & Set
//배열 & 객체
// 배열 : 인덱스 // 개수 // 넣고 빼고 유동적
//객체 : 프로퍼티 형태 (어떤 자료가 무슨의미인지)
// 배열 + 객체 => 울버린 => map
//map은 배열의 형태를 띄고 있는 이터러블한 객체의 자료구조들의 공통적 약점을 가진다 = 중복값을 제어하지 못 함  ==> 이 중복값을 제어하는게 Set

// 선 선언 후 요소 === 여기에 set은 Set과 다르다.
const bag = new Map();
//bag은 객체가 되었다.
bag.set("color", "red");
//color는 키고 red가 value가 되고 인덱스값을 가진다.
//length의 동인한 개념인 size도 가지고있다.

console.log(bag);

/// 선언과 요소 같이
const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);
console.log(myCup);

//set을 활요해보자
//값을 추가 할 수 있다.
myCup.set("type", "mini");
//마치 온점표기점처럼 추가할수있다.
