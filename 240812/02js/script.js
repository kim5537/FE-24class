const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");
const form = document.querySelector("form");

const current = document.querySelector("#current");
const today = new Date();
//데이트 안에 입력값을 넣으면 그 입력값에 해당하는 값을 가져온다.("2002-01-01") 이런식으로 넣으면 된다.
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1;
const currentDate = today.getDate();

current.innerText = `😊오늘은 ${currentYear}년 ${currentMonth}월 ${currentDate}일 입니다.`;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const birthDay = new Date(
    birthYear.value,
    birthMonth.value - 1,
    birthDate.value
  );
  const resultDays = document.querySelector("#days");
  const resultHours = document.querySelector("#hours");

  const passed = today.getTime() - birthDay.getTime();
  //타임은 밀리초임을 잊지말자.
  const passedDays = Math.floor(passed / (24 * 60 * 60 * 1000));
  const passedhouse = Math.floor(passed / (60 * 60 * 1000));
  const passedAges = Math.round(passedDays / 365);
  console.log(passedDays);
  resultDays.innerText = `현재 나이는 ${passedAges}세`;
  resultHours.innerText = `현재까지 ${passedhouse}의 시간이 흘렀습니다.`;
});

//"2002-01-01"
//이럴때는 값을 그대로 잘 들고 오나. 하단에 내용을 보면...
//연 월 일  이렇게 년을 수도 있다. ("2002","2","1")
//단 이렇게 넣으면 달에 현제값에  +1를 가져온다. 상위 값을 콘솔로 가져온다면 2002 03 01로 가져온다. 때문에 월에 -1을 해줘야한다. 그래서 현재처럼 값을 무조건 쪼개여 가져온다면 월을 주의하자

//1초는 1000밀리초
//1분 = 60초 = (60*1000)
//1시간 = 60분 -3600초 = (60*60*1000)
//1일 = 24시간 = (24 * 60 * 60 *1000)
