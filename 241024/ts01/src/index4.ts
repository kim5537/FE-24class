// 인터페이스 선언형

//옵셔널 , 읽기 전용.. 잊기말기

// interface Person {
//   name: string;
//   age?: number;
//   sayHi?: () => void;
// }

// const person: Person = {
//   name: "David",
//   sayHi: () => {
//     console.log("Hi");
//   },
// };

// const person01: Person = {
//   name: "Peter",
//   age: 24,
// };

// // 타입은 자유롭게 쓴다 그럼 인터페이스는?
// type Type1 = number | string;
// type Type2 = number & string;

// // interface Person {
// //   name: string;
// //   age: number;
// // } | number // 에러

// interface Person {
//   name: string;
//   age: number;
// }

// type Type3 = number | string | Person; // 이런식으로 가능하다.

// const person: Person = {
//   name: "David",
//   age: 20,
// };

// interface Animal {
//   name: string;
//   age: number;
// }

// interface Dog {
//   name: string;
//   age: number;
//   isBark: boolean;
// }

// interface Cat {
//   name: string;
//   age: number;
//   isScratch: boolean;
// }

// interface Chicken {
//   name: string;
//   age: number;
//   isFly: boolean;
// }

// 이럴때 expends를 사용 (확장)

// interface Animal {
//   name: string;
//   age: number;
// }

//인터페이스가 아닌 타입별칭으로도 가능

type Animal = {
  name: string;
  age: number;
};

interface Dog extends Animal {
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

const dog: Dog = {
  name: "뽀삐",
  age: 5,
  isBark: true,
};

//두개를 받을 수도 있다. - 인터페이스 다중확장
interface DogCat extends Dog, Cat {
  breed: string;
}
