//사용자로 부터 2개의 숫자를 받습니다.
//2개의 숫자의 최대공약수를 찾아서 콘솔창에 출력
//최대공약수란? 복수의 숫자로 동시에 나눌수있는 수 중에서 가장 큰 수
// ex  - 4와 12의 최대공약수는 4.

//값받기 ==> a,b ==> 2개의 값을 받기위한 for 반복문 사용 가능
//최대공약수 구하기 == 각자의 약수를 구하고 공통된 수 중 제일 큰 수?
//공식 a,b
//2로 먼저나누고 안 나눠지면 3으로 나눈다. +자신과 1
// 3까지 나눠지지 않으면 멈춘다.
//해당값을 더하고 나온 숫자들을 비교하고 같은 값을 뽑는다.
//제일 큰 값을 제출한다.

////헤설 /////////////////////

// const num01 = Number(prompt("첫 숫자를 입력"));
// const num02 = Number(prompt("두번째 숫자 입력"));

// function getGCD() {
//   //리턴을 쓰기위해 일부러 함수 만들기.
//   const max = num01 > num02 ? num01 : num02;
//   //비교공식
//   //상대적으로 큰 숫자를 찾고 큰 숫자를 가지고 얻은 두 숫자로 나눠보고 떨어지면 값을 추출
//   let gcd = 0;
//   for (let i = 1; i <= max; i++) {
//     if (num01 % i === 0 && num02 % i === 0) {
//       gcd = i;
//     }
//   }
//   return gcd;
// }

// alert(`${num01}이랑 ${num02}의 최대공약수는 ${getGCD()}입니다.`);
