// const today = new Date();
// //new가 있다? 클래스를 통해 어딘가 만들어진 "프로토타입 함수"이다.구분을 위해 앞에 대문자로 만들어둔다. --> 우리가 직접 선언한 변수는 앞엔 소문자를 쓰자
// const month = today.getMonth() + 1;
// // 여기서 today는 객체라고 부른다. 우리가 선언을 이미한 함수이기 때문
// //getMonth은 매서드라고 한다.
// const date = today.getDate();
// const day = today.getDay();

// document.write(`<h1>오늘 날자 정보 </h1>`);
// document.write(`현재 월 : ${month}월`);
// document.write(`<br/>`);
// document.write(`현재 일 : ${date}일`);

// console.log(day);
// //Date 날자와 년도 시분초 다 나온다.
// //month는 특이하게 0부터 샌다. 그래서 한달 적게 나온다. 현 달은 무좍건 1을 더하자
// //day는 숫자 4가 나오는데 일요일부터 0을 센다. 목요일이기때문에 4가 나온 것

// 밀리초개념
//1970년 1월 1일부터 세기 시작한 밀리초
// 초 분 시
// 1초 -- 1000밀리초
// 1분 -- 60초 = (60*1000) = 60,000밀리초
// 1시간 -- (60*60*1000) = 3,600,000 밀리초
// 1일 = (24*60 * 60 *1000)

const today = new Date();
const year = today.getFullYear();
console.log(year);
const lastDate = new Date(year, 11, 31);

const diffDate = lastDate - today;
// const result = diffDate / (24 * 60 * 60 * 1000);
//단순히 lastDate - today 밀리초로나옴 144.5일 나옴. 왜 .5라면 시간이 가서
const result = Math.round(diffDate / (24 * 60 * 60 * 1000));
alert(`올 연말 마지막 날까지 ${result}일 남았습니다.`);
console.log(result);
