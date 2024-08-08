const userAnswer = prompt("우리가 만난지", "2024-06-14");
const accent = document.querySelector(".accent");
// const date100 = document.querySelector("#date100");
// const date200 = document.querySelector("#date200");
// const date365 = document.querySelector("#date365");
// const date500 = document.querySelector("#date500");
//현재 시간을 가져온다
//날짜를 할땐 let과 const를 잘 사용하자
const now = new Date();
//임의의 날자 설정
// const firstDay = new Date("2024-06-14");
const firstDay = new Date(userAnswer);

//밀리초로 변경
const toNow = now.getTime();
const toFirst = firstDay.getTime();

const passedTime = toNow - toFirst;
const passedDate = Math.round(passedTime / (24 * 60 * 60 * 1000));

// console.log(toNow, toFirst);
accent.innerText = `${passedDate}일`;

// //D 100
// let future = toFirst + 100 * (24 * 60 * 60 * 1000);
// let someDay = new Date(future);
// let year = someDay.getFullYear();
// let month = someDay.getMonth() + 1;
// let date = someDay.getDate();
// date100.innerText = `${year}년 ${month}월 ${date}일`;

// //D 200
// future = toFirst + 200 * (24 * 60 * 60 * 1000);
// someDay = new Date(future);
// year = someDay.getFullYear();
// month = someDay.getMonth() + 1;
// date = someDay.getDate();
// date200.innerText = `${year}년 ${month}월 ${date}일`;

// //D 365
// future = toFirst + 365 * (24 * 60 * 60 * 1000);
// someDay = new Date(future);
// year = someDay.getFullYear();
// month = someDay.getMonth() + 1;
// date = someDay.getDate();
// date365.innerText = `${year}년 ${month}월 ${date}일`;

// //D 500
// future = toFirst + 500 * (24 * 60 * 60 * 1000);
// someDay = new Date(future);
// year = someDay.getFullYear();
// month = someDay.getMonth() + 1;
// date = someDay.getDate();
// date500.innerText = `${year}년 ${month}월 ${date}일`;

// //같은 코드가 반복되어진다.
// //fuuntion을 써보자

// const clacDate = (days) => {
//   future = toFirst + days * (24 * 60 * 60 * 1000);
//   someDay = new Date(future);
//   year = someDay.getFullYear();
//   month = someDay.getMonth() + 1;
//   date = someDay.getDate();
//   document.querySelector(
//     `#date${days}`
//   ).innerText = `${year}년 ${month}월 ${date}일`;
// };

// clacDate(100);
// clacDate(200);
// clacDate(365);
// clacDate(500);

// function Hoisting ==> 화살표함수는 호이스팅 기능을 사용할 수 없다. 따라서 반드시 선 선언 후 호출을 지켜야한다.
// 반대로 function은 가능하다. - 단 익명은 안되고 기명함수만 가능하다.

clacDate(100);
clacDate(200);
clacDate(365);
clacDate(500);

function clacDate(days) {
  future = toFirst + days * (24 * 60 * 60 * 1000);
  someDay = new Date(future);
  year = someDay.getFullYear();
  month = someDay.getMonth() + 1;
  date = someDay.getDate();
  document.querySelector(
    `#date${days}`
  ).innerText = `${year}년 ${month}월 ${date}일`;
}
