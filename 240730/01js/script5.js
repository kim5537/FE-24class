//사용자에게 숫자 하나 받기
// 홀짝 확인 후 짝 ==> 알림창 "짝수" \\ 홀수 ==> 알림창 "홀수"
// 짝은 2로 나눠짐 홀수는 2로 나눴을때 나머지 존재
//단 사용자가 취소버튼를 누를 걸 생각한 예외조항 포함
//삼항조건연산자로 하기

// const num = Number(prompt("짝수 판별기"));
// const num1 = (num % 2)= 0;
// console.log(num1);

//해석
let userNumber = prompt("숫자입력");

if (userNumber !== null) {
  userNumber = parseInt(userNumber);
  userNumber % 2 === 0
    ? alert(`${userNumber} : 짝수`)
    : alert(`${userNumber} : 홀수`);
}
