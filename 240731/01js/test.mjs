//사용자로부터 태어난 연도를 받고
//태어난 년도를 기준으로 나이가 몇살인지 #result 공간에 출력
//innerText 속성을 활요하면 특정 node안에 텍스트 문자을 넣을 수 있다.

// const year = Number(prompt("태어난 년도"));
// const age = 2024 - year + 1;
// const Inner = document.querySelector("#result");

// Inner.innerText = age;

//--------------------------해설

const button = document.querySelector("button");
const calc = () => {
  const buirthYear = Number(prompt("태어난 년도 입력", "ex. 2002"));
  const currentYear = 2024;
  const age = currentYear - buirthYear + 1;
  const result = document.querySelector("#result");
  result.innerText = `당신의 나이는 ${age}세 입니다.`;
};

button.addEventListener("click", calc);
