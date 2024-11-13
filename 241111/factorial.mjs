// 5! (5 팩토리얼)의 고급함수 -선언형
//하향식
// 5, 4,3,2,1로 값이 내려간다
// const factorial = (number) => {
//   if (number === 1 || number === 0) {
//     return 1;
//   } else {
//     return number * factorial(number - 1);
//   }
// };

// console.log(factorial(5));

// 5! (5 팩토리얼)의 저급함수 -명령형
//상향식
const factorial01 = (number) => {
  let sum = 1;
  for (let i = 1; i <= number; i++) {
    sum *= i;
  }
  return sum;
};

console.log(factorial01(5));

// 하향식이 컴퓨터에게 더 부담이 적다.
// 팩토리얼 - 본인의 값을 하향식 방식으로 ㄱㅖ산한 것
