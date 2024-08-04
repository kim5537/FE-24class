//=====일반 함수 혹은 function 함수 ==========//
//함수를 선언하자.
// function calcSum() {}

//함수 선언 키워드 = function
//() = 매게변수 , 무언가를 실행하기 위한 변수
//매게변수 값 (안 내용) 꼭 필요하진 않다. 필요상황에서 사용 =>없으면 바로 실행
//{} = 실행부. 함수의 몸통

//함수를 호출할 때 , 매게 변수의 자리에 어떤 값을 전달하고자 한다면, 인수 혹은 인자값을 넣어줘야한다.
//인자값 = 매게변수

// function calcSum(str) {
//   prompt(`${str}`);
// }

// calcSum("아이언맨");
//인자값을 str로  정하여 후에 그 인자값을 끌어와(프롬프트 알림글) 변환함 (아이언맨)

function calcSum() {
  let sum = 0;
  for (let i = 1; 1 <= 10; i++) {
    sum += i;
  }
  console.log(`1부터 10가지 더하면 ${sum}`);
}
//함수 선언

calcSum();

//함수 호출

//sum은 여기서 지역번수이다. 함수내에 선언되었기 때문

//======익명 함수 ===========//
const calcSum = function () {};
//평션뒤 함수명이 없이 변수명을 넣었다.

const calcSum = function () {
  let sum = 0;
  for (let i = 1; 1 <= 10; i++) {
    sum += i;
  }
  console.log(`1부터 10가지 더하면 ${sum}`);
};

//=====화살표 함수 ==========//
//화살표모양이 function이란 키워드를 대체할 수 있도록 한 함수
//함수명을 줄여 없앴으니 function이란 단어도 없애보자.하고 나온 화살표 함수

//--------함수의 예시 ----------------//
function sum(a, b) {
  const result = a + b;
  alert(`두 수의 합은 ${result}`);
}
// 변수로 사칙 연산을 하고 있기때문에 문자가 들어가면 템플릿리터럴을 해야한다.
const result = `a + b +"문자"`;

sum(1, 2);
//인자값을 넣어줘야한다.

// ---for
// const num = Number(prompt("숫자입력"));
// //prompt는 문자열로 값을 받기 때문에 숫자로 형변환

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum}입니다`);
// }

// calcSum(num);
//받은 값을 인자값으로 넣어준다.

//-----------return--반환문------------//
//함수내에 선언된 담겨진 값을 로컬변수로 반환 시키고 싶을 때 사용하는 return을 사용한다.== 주로 다른 연산을 돌릴 때 많이 사용

// const num = Number(prompt("숫자입력"));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// alert(`1부너 ${num}까지 더하면 ${calcSum(num)}입니다.`);

///-------------매개변수 보강 --기본 매개변수----------------//
//옳은 형태======
// function multiple(a, b, c) {
//   console.log(a + b + c);
// }

// multiple(2, 4, 8);

//인자값을 잃은 형태=====
// function multiple(a, b, c) {
//   console.log(a + b + c);
// }

// multiple(2, 4);
//NaN이 뜬다

//--예시 --//
//올리브영 프론트엔드 개발자
//회원가입 => 이름 , 나이 , 피부타입의 값을 받는데 피부타입은 선택사항이다.
//위처럼 짜면 에러가 뜬다. 반드시 3개의 값을 넣어야하기 때문
//이럴때 넣는 게 기본 값
//기본매개변수라고 한다.-----------------**
//왼쪽부터 값이 들어간다.
// function multiple(a, b, c = 10) {
//   console.log(a + b + c);
// }

// multiple(2, 4);

//====================콜백함수===================//
// document.body.innerHTML += `<button id= "btn"> click</button>`;

// const button = document.querySelector("#btn");
// console.log(button);

// button.addEventListener("click", function () {
//   alert("클릭");
// });
//addEventListener("인자값") ==얘도 함수다. 인자값을 리턴해주는 속성을 가지고 있고 ()안에 함수도 들어가기 때문에 콜백함수이다.

//---리팩토리------------------//
document.body.innerHTML += `<button id= "btn"> click </button>`;

const button = document.querySelector("#btn");
console.log(button);

function display() {
  alert("클릭");
}

button.addEventListener("click", display);
