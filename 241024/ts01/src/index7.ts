// 제네릭 필요한 사항
//제네릭 - 타입의 변수화
//종합적인 타입을 정의하고 싶을 때 사용
//General : 종합적인
// General Hospotal 종합병원

// const func = (value) => {
//   return value;
// };

// func(10);
// func("이름");
// func([1, 2, 3, 4]);
// func({ name: "David", age: 20 });
// // 이렇게 여러 타입으로 들어가야할 때

// //any를 썼다가 문제가 생길 수 있다.
// // 누가와도 된다는 의미가 되면서
// const num = func(10);
// num.toUpperCase(); // 숫자가 들어갔는데 문자열 함수가 가능하다. 이러한 상황이 생기니까 any는 최후의 보류이다.

// //unKnown을 쓰면?
// //unKnown은 타입 가드를 줘야한다. 그럼 모든 경우의 수를 다 타입가드해야한다.

//제네릴 써보자.
// 무엇이 들어올지 모를 때..  변수가 생겼을 때.. 뭐든 상관없지만 타입변수이기 대문에 대부분 T를 사용한다.
// 그냥 T를 넣으면 문자열로 인식하기 때문에 <T>를 넣는다. ==> 타입변수
// const func = <T>(value: T): T => {
//   return value;
// };

// 각 매개변수의 타입과 출력값의 타입이 전부 다를 때---
//뭐가 들어올 진 모르지면 무튼 다 타입이 다르다.
const swap = <T, U>(a: T, b: U) => {
  return [b, a];
};

const [a, b] = swap("1", 2);

//배열을 매개변수로 받는 함수를 만들어 보자 - 단 배열안의 값의 타입을 모른다면
const funcArray = <T>(data: T[]): T => {
  return data[0];
};

const num = funcArray(["0", 1, 2]);

let str = funcArray([1, "Hello", "World"]);

//전개연산자를 사용해 보자 -
//unknown[] ==> 어떤 값이든 다 받을 수 있다.
const returnFirst = <T>(data: [T, ...unknown[]]): T => {
  return data[0];
};

const str0 = returnFirst([1, "안녕", "친구"]);
console.log(str0);

//함수의 매개변수에 이터러블한 녀석만 받을 때. -extends로 확장하나 extends 자체가 객체만 받기때문에 {}를 쓰고
// 이터러블한 녀석만 가질 수 있는 length 적어준다.
const func4 = <T extends { length: number }>(data: T): number => {
  return data.length;
};
console.log(func4("123"));
console.log(func4([1, 2, 3]));
console.log(func4({ length: 1 }));
