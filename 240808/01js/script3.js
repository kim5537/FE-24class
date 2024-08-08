const userQuestion = prompt("시작일을 작성해주세요", "2024-08-08");
const result = document.querySelector("#result");

const today = new Date();
const firstDay = new Date(userQuestion);

const passdeTime = today.getTime() - firstDay.getTime();
//getTime으로 밀리초 변환을 안해도 계산이 되지만 적는 버릇을 들이자. 쓸때가 반드시 있다.
const passedDate = Math.round(passdeTime / (24 * 60 * 60 * 1000));

result.innerText = passedDate;
