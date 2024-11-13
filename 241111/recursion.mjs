// const myFunc = (number) => {
//   if (number > 3) return;
//   console.log(number);
//   myFunc(number + 1);
// };

// myFunc(1);

// const funcA = () => {
//   let a = 10;
//   let b = 5;
//   return a + b;
// };

// const funcB = () => {
//   let c = 10;
//   let d = 5;
//   return c - d;
// };

// funcA()
// funcB()
// 콜스택에 쌓인다. A가 완료된 후 A가 나가고 B가 들어와서 실행 후 B가 나간다.

// const funcC = () => {
//   let a = 10;
//   let b = 5;
//   return a - b;
// };

// const funcD = () => {
//   let c = 10;
//   let d = 5;
//   let e = funcC();
//   return c + d + e;
// };

// funcD()
// funcC()

// D가 먼저 실행되었지만 C를 알아야하기 때문에 대기 C가 들어와 값을 도출하고 나간다 D의 값이 출력되고 D가 나간다. - call stack이 stack이라고 불리는 이유 = 쌓이기 때문이다.

//따라서 재귀함수는 본인을 계속 호출한다 그러나 기저 조건이 맞지 않으면 본인인 함수가 계속 쌓인다. 기저 조건이 맞아 함수가 returen 혹은 break 될 때 까지 본인이 쌓이고 또 쌓이고를 반복된다. -> 때문에 myFunc이 1,2,3이 찍히는 것이다.

//
