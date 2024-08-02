// //2초에 한번씩 인삿말이 나오게 할 것이다
// //특정 시간에 맞춰서 무언가 반복적으로 자동 실행하도록 하고 싶을 때
// setInterval(() => {
//   console.log("안녕하세요");
// }, 2000);

// //한줄로 끝나지 않을 상황엔 한줄에 보기 힘들기에 리팩토링한다.
// function greeting() {
//   console.log("안녕하세요");
// }

// const timer = setInterval(greeting, 2000);

// clearInterval(timer);
////이러면 작동자체가 멈춘다.
////조건을 주고 그 것이 참이 되면 멈추게 하는게 일반적이다.

// let counter = 0;

// const timer = setInterval(() => {
//   console.log("안녕");
//   counter++;
//   if (counter === 5) {
//     clearInterval(timer);
//     //재귀함수 호출 = 제일 밖에 있는 timer을 안으로 끌고 와 사용
//   }
// }, 2000);

// let num = 0;
// const testFnc = () => {
//   num++;
//   document.write(num, "<br/>");
//   if (num === 10) return;
//   testFnc();
// };

// testFnc();

// //반복문이 없는데 반복하게 보임.
// //return ==> 문장의 종결만 가지진 않는다.
// // return 함수의 값을 반환하기 위해 사용했던것!! 이거에 더 가깝다. 값을 밖으로 반환했기에 완료. 함수가 가진 고유한 기능이 끝나야 반환한다. 때문에 반환은 연산이 끝났다는 의미이기도 하다.

// //리턴은 단순히 구문 종결이 아니다. 단순히 문장을 종결한다면 값을 주지 않는다. 리턴은 값을 반환하고 종료하다. 값이 없으면 보이지 않는 무의 값을 반환했다고 생각하면 된다.

// setTimeout(() => {
//   console.log("3초 지남");
// }, 3000);
// //페이드인 페이드아웃 슬라이드같은 곳에 사용을 많이 한다.
