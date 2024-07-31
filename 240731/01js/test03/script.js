//사용자로부터 숫자를 받는다.
//사용자에게 받은 숫자가 소수이면 바탕화면에 "''숫자는 소수입니다".
//소수가 아니면 "''숫자는 소수가 아닙니다."
//소수는 소숫점이 아니다 ==실수
//소수는 1과 자신만으로 나눠질수있는 숫자.
//1은 소수가 아니다.

//소수 공식은 뭘까.
//나와 1뺴고 나눠지는 수가 있으면 안됨.

// const number = Number(prompt("숫자입력"));

// if (number === 1) {
//   document.write(`1은 소수도 합성수도 아닙니다.`);
// } else if (number === 2) {
//   document.write(`2는 소수입니다.`);
// } else {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       document.write(`${number}는 소수가 아닙니다`);
//       break;
//     } else {
//       document.write(`${number}는 소수입니다.`);
//       break;
//     }
//   }
// }

const number = Number(prompt("숫자입력"));
let isPrime;

if (number === 1) {
  document.write(`1은 소수도 합성수도 아닙니다.`);
} else if (number === 2) {
  document.write(`2는 소수입니다.`);
  isPrime = true;
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      //0이 나옴
      break;
    } else {
      isPrime = true;
      //0이 안 나옴
    }
  }
  if (isPrime) {
    document.write(`${number}는 소수입니다`);
  } else {
    document.write(`${number}는 소수가 아닙니다`);
  }
}
