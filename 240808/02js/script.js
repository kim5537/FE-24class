//필요한 요소. #이름 인풋태그 와 #major인풋태그 그리고 폼태그의 버튼과 테이블 테그.
//1. 이름에 입력된 내용을 인식할 함수
//2. 전공에 입력된 내용을 인식할 함수
//3.등록하기 버튼을 누르면 상단의 두 입력값이 들어와야한다

//4.태그를 추가해야한다.
//태그를 만들어주는 변수를 선언
//해당 태그를 테이블태그안에 넣어준다.

const name = document.querySelector("#name");
const major = document.querySelector("#major");
const form = document.querySelector("form");
const table = document.querySelector("table");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = name.value;
  let tableHr = document.createElement(tr);
  let tableTd = document.createElement(td);
});
