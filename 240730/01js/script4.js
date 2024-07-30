// const x = 10;
// const y = 4;

//사칙 연산자
// let result = x + y;
// console.log(result);

// result = x - y;
// console.log(result);

// result = x * y;
// console.log(result);

// result = x / y;
// console.log(result);

// result = x % y;
// console.log(result);

//증감 연산자
// let x = 10;
// let y = 4;
//값을 바꿔야해서 let
// x--;
// y++;
// console.log(x);
// console.log(--x); 이렇게 적기도 가능 (앞 x--; 를 지웠을때)
// //9나옴
// console.log(y);
// //5나옴

//위치에 따른 값이 변화
// console.log(x);
// x--;
//10나옴
// console.log(x--); 같은 값이 나온다. 상단27번과 다른 -위치확인
//반복문은 뒤에 붙는다 초기값 확인 후 조건 확인하면 조건문을 보러 내려간 후 증감연산자를 확인하기 때문
// console.log(y);
// y++;
//4나옴

// y = y + x;
// 같은 걸 적은 복합대입연산자(할당연산자)
// y += x;

//y = y-x;
//y -=x;

//y = y*x;
//y *=x;

//y = y/x;
//y /=x;

//y = y%x;
//y %=x;

// let str = "<table border='1'>";
// // str = str + "</table>";
// //같은 의미
// str += "<tr>";
// str += "<td>1</td><td>2</td><td>3</td>";
// str += "</tr>";
// str += "</table>";
// document.write(str);

//---조건문
// const x = 10;

// if (x > 5) {
//   console.log(`${x}는 5보다 크다`);
// }

// const userinput = prompt("이름 입력");

// if (userinput === null) {alert("취소");}
// else {alert(`${userinput}님 환영합니다`);}

// const score = Number(prompt("자바스크립트 시험점수"));

// if (score !== null) {
//   if (score >= 90) {
//     alert("A");
//   } else if (score >= 80) {
//     alert("B");
//   } else {
//     alert("C 학점");
//   }
// }

// if (score !== null) {
//   if (score >= 90) alert("A");
//   else if (score >= 80) alert("B");
//   else alert("C 학점");
// }

//치트키
// const num1 = 10;
// const num2 = 20;

// if (num1 < num2) {
//   const small = num1;
// } else {
//   const small = num2;
// }

// console.log(small);
//에러가 난다. small은 지역변수이기 때문

//방법 1
// small를 전역변수로 선언만해둔다. ( let small; )

//방법 2

// const num1 = 10;
// const num2 = 20;

// if (num1 < num2) {
//   small = num1;
// } else {
//   small = num2;
// }

// console.log(small);

//let val const를 안 쓰면 전역으로 간다. 그러나 에러가 생길수있기 떄문에 많이 사용하지말자.

//정석방법
const num1 = 10;
const num2 = 20;
let small;
small = num1 < num2 ? num1 : num2;
