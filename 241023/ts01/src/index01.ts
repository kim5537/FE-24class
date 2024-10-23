const calc = (value: number, cb: (age: number) => void): void => {
  let add = (a: number, b: number) => a + b;
  let multiply = (a: number, b: number) => a * b;

  let result = multiply(add(1, 2), value);
  cb(result);
};

calc(30, (result: number) => console.log(`result is ${result}`));

//고차함수
// const add =
//   (a: number): ((arg0: number) => number) =>
//   (b: number) =>
//     a + b;

// const result = add(1)(2);

// console.log(result);

//함수시그니처로 바꿔보자
type NumberToNumber = (agr0: number) => number; // 숫자를 받아 숫자를 반환한다.

const add = (a: number): NumberToNumber => {
  const _add = (b: number): number => {
    return a + b;
  };
  return _add;
}; // 인자값은 숫자로 받는다. - 반환값도 넘버이다/

const result = add(1)(2);
console.log(result);

// 선연형 프로그래밍 코딩 훈련!!
//파이프 함수
//커리 함수
//모나드 함수
//람다 함수
