const hanoi = (count, from, to, temp) => {
  if (count === 0) return;

  hanoi(count - 1, from, temp, to);
  console.log(`원반 ${count}을 ${from}에서 ${to}로 이동`);
  hanoi(count - 1, temp, to, from);
};

hanoi(3, "A", "C", "B");

// const hanoi = (3, a, c, b) => {
//   if (3 === 0) return;

//   hanoi(3 - 1 , a, b, c);  -> 1번 재귀함수
//   console.log(`원반 ${3}을 ${a}에서 ${c}로 이동`);
//   hanoi(3 - 1, b, c, a);
// };
// ==>  콜스택에 쌓임

////////// 2가지의 재귀함수를 가지고 있어 갈래가 두개로 나눠진다 ///////////
// --> 1번 재귀함수
// const hanoi = (2, a, b, c) => {
//   if (2 === 0) return;

//   hanoi(2 - 1 , a, c, b);
//   console.log(`원반 ${2}을 ${a}에서 ${b}로 이동`);
//   hanoi(2 - 1, c, b, a);
// };
// ==> 콜스택 쌓임

// -->2번 재귀함수
// const hanoi = (2, b, c, a) => {
//   if (2 === 0) return;

//   hanoi(2 - 1 ,  b, a, c);
//   console.log(`원반 ${2}을 ${a}에서 ${b}로 이동`);
//   hanoi(2 - 1, a, c, b);
// };
