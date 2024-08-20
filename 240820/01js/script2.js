//학생들이 신청한 과목을 중복없이 출력하고 싶을 때  ==> set
const result = document.querySelector("#result");
// 펑션이라면 선언부가 어디에 있던 호이스팅이 가능하여 문제가 없지만 화살표는 호이스팅이 안되기 때문에 선언문은 상단에 적는 게 좋다.
const memeber1 = ["Html", "Node", "React"];
const memeber2 = ["CSS", "JavasScript", "React"];
const memeber3 = ["JavasScript", "React"];

const subjents = [...memeber1, ...memeber2, ...memeber3];
console.log(subjents);

const resultList = new Set();
//하나씩 넣어줘야한다.

subjents.forEach((subjent) => {
  resultList.add(subjent);
});

console.log(resultList);
//보면 배열과 유사하지만 배열이 아니기 때문에 배열로 만들어 줘야한다.

result.innerHTML = `
<ul>
${[...resultList].map((subjent) => `<li>${subjent}</li>`).join("")}
</ul>
`;
//map은 배열을 배열로 반환한다. ==> 문!으로 끝나는 문장들은 html 안에 사용을 못함 forEach문등등 사용이 불가. 표현식들을 사용해야한다. 따라서 map을 사용(삼항조건연산자도 식이다.)
//표현식 & 실행문
//각각 따르는 문이 있다.
//리엑트는 jsx문법이다. jsvascript and Xml(html) --> 리엑트는 그래서 포문 이프문 보기 힘들다.

//join으로 문자열로 변경해줘야한다.

// 요즘 질문들이 json이 많은다
// js에서 fetch()를 통해 데이터를 가져오는데 이벤트가 안 먹는다
// 데이터와 이벤트가 동시 실행되면서 에러가 된다. 먼저 데이터를 가지고 오고 난 후 이벤트를 줘야한다.
//1. fetch() 데이터를 가져오는 함수 내부에서 이벤트를 실행시킨다.
//2. promise() || async & await ==> (async:비동기처리. await:대기->앞쪽 실행이 끝날때까지 기다려준다.)
