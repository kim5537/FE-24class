//타입구조도
//모든 타입 슈퍼타입 & 서브타입
//타입 수용 => 타입관 호환성이 있나 없나 라고 말하기도 한다.

// let num1: number = 10;
// let num2: 10 = 10; // 리터럴 타입 . 추론

// // num1 = num2;// 에러 없음
// // num2 = num1;// 에러 남

// //타입 스크립트에 기본적으로 내장되어이 있는 내장타입  > 리터럴 타입 보다 슈퍼타입 그래서 에러가 난다
// // 서브 타입을 슈퍼타입으로 호환시키는 액션 = 업캐스팅 : 대부분 허용
// // 슈퍼 타입을 서브 타입으로 호환시키려는 액션의 행위 = 다운캐스팅 :거의 대부분 불가하다.(유일한 경우 any)

// interface Animal {
//   name: string;
//   color: string;
// }

// interface Dog {
//   name: string;
//   color: string;
//   breed: string;
// }

// let animal: Animal = {
//   name: "고양이",
//   color: "white",
// };

// let dog: Dog = {
//   name: "멍",
//   color: "brown",
//   breed: "진도",
// };

// // animal은 dog보다 슈퍼타입
// // dog는 animal 보다 서브타입
// // animal = dog;
// // dog = animal;

// interface Book {
//   name: string;
//   price: number;
// }

// let book: Book;

// interface ProgrammingBook {
//   name: string;
//   price: number;
//   skill: string;
// }

// let programmingBook: ProgrammingBook = {
//   name: "TS",
//   price: 33000,
//   skill: "TS",
// };

// book = programmingBook;
// programmingBook = book;

// 초과 프로퍼티 검사
// let programmingBook: Book = {
//   name: "TS",
//   price: 33000,
//   skill: "TS",
// };
// 이렇게는 직접적으론 안된다. skill이 없기 때문.

// let book3: Book = programmingBook; // 별도의 변수를 지정해서 지정하는 건 가능하다 왜냐면 book이 슈퍼타입이기 때문

//대수타입 : 복수의 타입을 합성하거나 교차한 형태의 타입을 새롭게 만든 것.
// 합집합의 형태로 타입을 만드는 것 = 유니온타입
// 교집합의 형태로 타입을 만드는 것 = intersection 타입

// let a: string | number;

// a = 1;
// a = "헬로";

// type Dog = {
//   name: string;
//   color: string;
// };

// type Person = {
//   name: string;
//   language: string;
// };

// // 유니온 타입으로 하나로 마늗ㄹ기 - 합집합?
// type Union1 = Dog | Person;

// let union1: Union1 = {
//   name: "",
//   color: "",
// };

// let union2: Union1 = {
//   name: "",
//   language: "",
// };

// let union3: Union1 = {
//   name: "",
//   color: "",
//   language: "",
// };

// // 아래 union4는 왜 허용이 안될까??
// //유니온은 우리가 아는 합집합이 아니야. - 요소 중 하나라도 충족시켜야한다.  Dog의 조건이 충족되거나 Person의 조건에 만족되거나 해야한다.
// // let union4: Union1 = {
// //   name: "",
// // };

// //인터섹션 계념. 모두를 합친거. -- 교집합 부분 - 모두를 충족시키는 것.
// type Intersection = Dog & Person;

// let intersection: Intersection = {
//   name: "",
//   color: "",
//   language: "",
// };

// interface Person01 {
//   name: string;
//   age: number;
// }

// // let Person01: Person01 = {}; //오류발생

// // Person01.name = "";
// // Person01.age = 20;

// // 오류 안나기! 약속하기! name과 age 가져갈거야! 약속 - 타입단언
// let Person01: Person01 = {} as Person01; //오류발생

// Person01.name = "";
// Person01.age = 20;

type Dog = {
  name: string;
  color: string;
};

//초가 프로퍼티를 통과하지 못했지만 dog의 형태를 가져간다고 약속(타입단언)하면 통과된다.- any다음의 치트키
let dog: Dog = {
  name: "뽀삐",
  color: "갈색",
  breed: "시고르자브종",
} as Dog;

//치트키 . 그 전 약속을 취소하고 새로운 약속을 한다.
let num1 = 10 as never;
let num2 = 10 as unknown;

//타입단언이 치트키 같은 역할을 한다. 그러나...
// let num3 = 10 as string;
//타입단언을 실행 시키려면 반드시 필요한 조건
//상호간 슈퍼 & 서브 타입이어야한다. number 이랑 string은 같은 열에 있다.
// 이럴 때는 어떻게 해야하나 ...
let num3 = 10 as unknown as string; //우회한다.

// let num4: 10 = 10 ; // 숫자 10으로 리터럴타입 지정
let num4 = 10 as const; // 숫자 10으로 리터럴타입 지정

//타입가드
const func = (value: number | string) => {
  // //숫자나 문자 들어갈수있는 유니온 타입
  // value.toFixed(2); // 에러 . 숫자도 올 수 있는데 숫자 소수점 2자리를 출력하는 숫자 함수는 왜 안되는걸까.
  // value.toUpperCase(); // 이것도 안된다.
  // // 반대의 경우도 생각해야 하기 때문에 안 된다.
  // // 이게 유니온 타입의 함정이다.

  // // 그래서 if로 조건문을 줘야한다.

  // 타입 가드
  if (typeof value === "number") {
    value.toFixed(2);
  } else if (typeof value === "string") {
    value.toUpperCase();
  }
};
