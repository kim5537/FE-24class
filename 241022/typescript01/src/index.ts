// TS의 타입

//기본제공 타입
//점진적 타입 시스템을 가지고 있어 기본 적으로 타입을 추론하여 타입에 대한 주석을 입력하지 않아도 타입이 정의 된다. 즉 num에 number을 쓰지 않아도 알아서 타입이 Number이 된다.
let num: number = 1;

let num2 = 1;
// num2 = "1";

let str: String = "Hello";

let bool: boolean = true;

let obj: object = {
  name: "David",
};

//다양한 종류의 타입 가운에 치트키 - any 타입 = 모든 타입을 수용할 수 있다.
let sample: any = 0;
sample = "Hello"; // 에러가 안 남

//undefinded - 값일수도 잇지만 타입으로도 된다. 값으로 undefinded를 하면 any 타입으로 할당되지만 타입 자체를 undefined를 넣으면 오직 undefined만 값으로 받을 수 있다.
let sample01: undefined = undefined;

//배열타입 정의하기
const numArr: number[] = [1, 2, 3];
const strArr: string[] = ["David", "Peter"];
const boolArr: Array<boolean> = [true, false]; // 이렇게도 타입을 많이 지정한다.(제네릭 형식으로 지정함)

//유니온 타입
const multiArr: (string | number | boolean)[] = [1, "hello", true]; //유니온(union)타입

//중첩배열
const doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// 길이와 타입이 고정된 배열 = Tuple 타입
let tup1: [number, number] = [1, 2];

const users: [string, number][] = [
  ["Devid", 1],
  ["Romeo", 2],
  ["Juliet", 3],
  ["Peter", 4],
];
