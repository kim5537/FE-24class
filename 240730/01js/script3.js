//사용자로 부터 3개의 값을 받으세요!!
//교툥비 . 식대 . 음료비
//위 3개의 값이 만원을 초과한다면 "예산관리 잘해주세요"가 나오고 합계값이 만원 이하이라면 예산 관리 잘하셨습니다. 라고 나오게

// const money1 = Number(prompt("교통비"));
// const money2 = Number(prompt("식대"));
// const money3 = Number(prompt("음료비"));
// const sum = money1 + money2 + money3;
// console.log(sum);

// let sum02 = sum <= 10000;
// sum02 = sum02 ? "예산관리 성공" : "예산관리 실패";

// alert(`${sum02}`);

//해설----
// const traffic = Number(prompt("교통비입력"));
// const food = Number(prompt("식대 입력"));
// const drink = Number(prompt("음료비"));
//---원래 해설 인데 반복문으로 해보자===

let arr = [];
for (let i = 0; i < 3; i++) {
  const userNum = Number(prompt("교통비,식대,음료비 순으로 입력!"));
  //배열안에 순차적으로 입력값을 넣는 함수 push
  arr.push(userNum);
}

// console.log(arr);
// const first = arr[0]
// const second = arr[1]
// const thir = arr[2]
// 이마저 비효율

const [traffic, food, drink] = arr;
// console.log(traffic, food, drink);

const sum = traffic + food + drink;
console.log(sum);

if (isNaN(Sum) || sum === 0) {
  //조건이 안 맞으면 안 돌아가게 하는 예외조항 제일 먼저 넣음=쓸데없는 데이터 소무 줄임(제외조항처리) -->소괄호안에 들어감
  alert("잘못 입력되었습니다");
} else if (sum <= 10000) {
  alert("예산관리 성공");
} else {
  alert("예산관리 실패");
}
