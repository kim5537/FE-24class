//사용자에게 숫자 1개를 받는다
//조건 1보다 큰 숫자를 받는다

//사용자에게 받은 숫자를 기준으로 1부터 해당숫자까지의 수들 가운데 짝수만 찾아 더한 결과값을 콘솔창에 출력

//--
//값을 받는다. ==> N(prompt)
//1~해당값에 해당하는 숫자들을 찾아온다 ==> for 반복문 사용
//각 숫자들을 짝수인지 확인한다.==> %2 값이 0인지 확인
//해당값만 찾아온다
//짝수값을 더한다.
//출력한다.

// const num = Number(prompt("숫자입력"));

// for (let i = 1; i < num; i++) {
//   console.log([i]);
// }

/////해설

const number = Number(prompt("숫자입력"));
let sum = 0; //숫자들이 들어갈 그릇만들기

if (number > 1 && number !== null) {
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 1) continue;
    sum += i;
  }
  console.log(sum);
}
