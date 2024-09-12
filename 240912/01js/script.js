// ////병합연산자
// const numA = 10;
// const numB = 20;
// const numC = undefined;

// console.log(numA ?? numC);

// ////삼항조건 연산자
// const strA = 1;
// // const strA = "안녕하세요!";
// typeof strA === "string"
//   ? console.log("문자자료형")
//   : console.log("문자자료형 아님");

// //// 스위치
// const fruit = "apple";
// switch (fruit) {
//   case "apple":
//     console.log("사과");
//   // break;
//   case "banana":
//     console.log("바나나");
//     break;
//   default:
//     console.log("찾는과일 없음");
// }

////객체
// let objA = {};
// // console.log(typeof objA);
// objA.numA = 1;
// objA["numB"] = 2;
// console.log(objA);

// let objB = new Object();
// console.log(objB);

// console.log(objA.numA);

// const testO = {
//   name: "david",
//   age: 20,
//   skill: "js",
// };

///객체안에 있느 key값을 배열로 반환++++++++++++++++++++++++++++++++++++++++

// const person = {
//   name: "david",
//   age: 20,
//   location: "서울",
// };
// //객체안의 key값을 배열로
// const keyArr = Object.keys(person);
// console.log(keyArr);

// //반복문으로 각 key를 가져옴
// keyArr.forEach((item) => console.log(item));

// // 반복문으로 각 key와 value를 가져옴
// keyArr.forEach((item) => {
//   let value = person[item];
//   console.log(item, value);
// });

/////구조분해 할당

////원래방법
// const name = testO.name;
// const age = testO.age;
// const skill = testO.skill;

// console.log(name, age, skill);

////구조분해할당
// const { name } = testO;
// const { age } = testO;
// const { skill } = testO;

////합쳐서 구조분해할당
// const { name, age, skill } = testO;

// console.log(name, age, skill);

/////단락회로 평가
// const calcA = () => {
//   console.log("A");
//   return false;
// };
// const calcB = () => {
//   console.log("B");
//   return true;
// };

// // console.log(calcA() && calcB());
// //react는 기본적으로 브라우저를 통해 앱을 여는 순간 컴포넌트가 무조건 마운트 된다.
// //가상돔을 만들어야하기 때문이다.  그럼 이때 컴포넌트 안에 영화 데이터를 찾아오는 fetch함수가 있다면 무조건 한번 돈다면 비동기로 움직이기 때문에 읽기전에 출력 => fetch함수가 정상적으로 출력안됨
// //뮤비데이터 && data.title  >> 이런식으로 사용
// // 찾아온 영화 데이터를 가지고 약 3000픽셀 높이값을 가지고 있는 브라우저 화면을 채워야하는 상황 20개 ? 그럼 다 엔드단락회로를 다 해줘야하나?
// // 이때 하는 게 로딩스피너를 넣는다.
// console.log(calcA() || calcB());

////전개연산자
// const arrA = [1, 2, 3];
// const arrB = [4, 5, 6];
// const arrC = [arrA, arrB];
// const arrE = [...arrA, ...arrB];
// console.log(arrC, arrE);

// const objA = {
//   a: 1,
//   b: 2,
// };
// const objB = { c: 3 };
// const objC = { ...objA, ...objB };

// console.log(objC);

///// 배열 메서드 특집
// let food = ["짜장면", "피자", "치킨"];
// const newLength = food.push("탕수육");
// console.log(food, newLength);

// const removeItem = food.pop();
// console.log(food, removeItem);

// const newLength = food.unshift("갈비찜");
// console.log(food, newLength);

// const removeItem = food.shift();
// console.log(food, removeItem);

// const sliced = food.slice(0, 2);
// console.log(sliced);

// const sliced = food.slice(1);
// console.log(sliced);

// const arrA = [1, 2];
// const arrB = [3, 4];
// const arrC = arrA.concat(arrB);
// console.log(arrC);

// console.log(food.indexOf("짜장면"));
// console.log(food.indexOf("피자"));
// console.log(food.indexOf(""));

// console.log(food.includes("마라샹궈"));
// console.log(food.includes("피자"));

// const arr = [
//   { name: "David" },
//   { name: "martin" },
//   { name: "romeo" },
//   { name: "juliet" },
// ];

// const element = arr.find((item) => item.name === "David");
// console.log(element);

// const arr = [
//   { name: "슛돌이", hoppy: "축구" },
//   { name: "통키", hoppy: "피구" },
//   { name: "강속구", hoppy: "야구" },
//   { name: "태백산", hoppy: "피구" },
// ];

// // const filteredArr = arr.filter((item) => item.hoppy === "피구");
// // // const filteredArr = arr.filter((item) =>{return item.hoppy === "피구"}); // 중괄호를 쓴다면 꼭 return을 쓴다.
// // console.log(arr, filteredArr);

// const newArr = arr.map((item) => item.name);
// console.log(newArr);

// const arr1 = [10, 5, 3];
// // arr1.sort();

// // console.log(arr1);

// // const compare = (a, b) => {
// // if (a > b) return 1;
// // else if (a < b) return -1;
// // else return 0;
// // };
// const compare = (a, b) => {
//   a - b;
// };
// // const compare1 = (a, b) => {
// //   b - a;
// // };

// arr1.sort(compare);
// console.log(arr1);

let food = ["짜장면", "피자", "치킨"];
// console.log(food.join());
// console.log(food.join(""));
console.log(food.join("-"));

const arr = [1, 2, 3, 4, 5];
// const result = arr.reduce((누산기, 더해질값) => 누산기 + 더해질값, 최초값);
const result = arr.reduce((acc, item) => acc + item, 0);

console.log(result);
