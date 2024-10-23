// const numArr: number[] = [1, 2, 3]; //타입주석 = 타입노테이션
// const strArr: string[] = ["Hello", "World"];
// const boolArr: boolean[] = [true, false];
// const boolArr2: Array<boolean> = [true, false]; //제네릭형식

// //유니온 타입 - 여러개 일때
// const multiArr: (number | string)[] = [1, "Hello"]; //넘버와 글자 둘다 가능한 배열
// let dobleArr: number[][] = [
//   [1, 2, 3],
//   [4, 5],
// ];

// //만약 배열안의 아이템의 갯수와 타입을 고정할 때  = 튜플타입
// let tup1: [number, number] = [1, 2];
// // tup1 = [1, 2, 3]; //오류가 발생
// // tup1.push(5); //이러면 에러가 안생김. 이러면 방지 할 수 없다. - 때문에 이런 사항을 유의해야한다.

//객체 타입 정의--------------------------------------------------------------------
//초중반 단계에선 객체와 함수의 타입을 정의 할 줄 알는 사람이 잘하는 사람.
// const user0: object = {
//   id: 1,
//   name: "David",
// }; // 가장 심플하지만 실무에선 사용하지 않는다.
// //사용할 수 없는 이유
// // 1, 객체 안의 값을 찾아서 사용해야하는 경우가 많다
// // const result = user.id; // 오류가 난다
// //앤 겉만 객체라고 보고 안에는 뭐가 있는 지 전혀 모른다.

// //구조적 타입 시스템을 적용하는 방법. --> 무식하지만 가장 확실한 방법
// const user02: { id: number; name: string } = {
//   id: 1,
//   name: "David",
// };

// //ts는 점진적 타입 시스템이다. - 불일치가 일어날 수 있다.
// // if) 만약 타입을 정의할 때와 다르게 id 값이 들어오지 않았다? . 그래서 선택적 타입을 준다. (뒤에 ?)
// //선택적 타입
// const user03: { id?: number; name: string } = {
//   id: 1,
//   name: "David",
// };

// //선택적 타입을 정의 할 수 있지만 만약 타입을 정의 할 순 있는데 객체 안의 value값을 외부에서 사용하지 못하게 할 수 있다. - 구조적 타입 시스템에서 readonly 사용하면 읽기 전용으로 바뀐다.
// let config: { readonly apikey: string } = {
//   apikey: "12512a3131xcds",
// };
// // config.apikey = "해킹"; // 읽기 전용 애러가 나며 막힌다.
// //그러나 문제가 생긴다 -- 너무 많으면 다 적어 줘야하나?
// //타입 별칭을 주면 된다 -대부분 앞에 대문자를 쓴다 = 타입별칭은 전역으로 설정되며 중복은 불가하다.
// //단 지역에서는 가능하다 하단에 fnc 참고
// type User = {
//   id: number;
//   name: string;
//   location: string;
// };

// let user1: User = {
//   id: 1,
//   name: "David",
//   location: "Seoul",
// };

// let user2: User = {
//   id: 1,
//   name: "peter",
//   location: "Seoul",
// };

// const fnc = () => {
//   type User = {
//     id: number;
//     name: string;
//     location: string;
//   };
// };

// //인덱스 시그니쳐
// // 타입 별칭으로 어더한 타입을 정의 하려 할 때  하위 요소의 모든 타입의 형태가 동일한 경우
// // 여기선 문자만이 들어올 것이다.
// type ContryCodes = {
//   [key: string]: string;
// };
// const countryCodes: ContryCodes = {
//   Korea: "ko",
//   UnitedState: "us",
//   UnitedKingdom: "uk",
// };
// //최우선 방법으로 추천하진 않는다
// // 객체의 타입 : interface 타입 ==> 이게 현업에선 먼저 한다.

// // 인터페이스 > 타입 별칭
// //타입별칭은 결과값을 정의할 때 사용하고 대부분은 인터페이스
// // interface User01 {
// //   id: number;
// // }
// // //최우선인 이유는 쓸수있는 기능이 많다.  -> 재활용 등등...

// // interface Person {
// //   name: string;
// //   age: number;
// //   etc?: boolean;
// // }

// // const perso01: Person = {
// //   name: "Peter",
// //   age: 24,
// // };
// // const person02: Person = {
// //   name: "Peter",
// //   age: 24,
// //   etc: true,
// // };

// // //프로포타입 객체를 만들 때 하는 class 이다
// // class Person1 {
// //   name: string;
// //   age: number;
// // }

// // const Person03: Person1 = new Person1(); //클래스 자체도 타입이 될 수 있다. 왜냐면 인스턴스는 복제품이기 때문이다.
// // Person03.name = "peter";
// // Person03.age = 20;
// // console.log(Person03);

// // //바닐라 자바스크립트
// // class Person2 {
// //   //필드값
// //   name: string;
// //   age: number;

// //   constructor(name: string, age: number) {
// //     //생성자 함수
// //     this.name = name;
// //     this.age = age;
// //   }
// // }

// //타입스크립트
// // class Person2 {
// //   //필드값 생략 가능

// //   //접근제어자 public - 내외에서 모두 접근 가능하게 해주겠다.
// //   //여기에 ?도 가능 - 옵셔널 값 . 있든 없든 상관 없음
// //   constructor(public name: string, public age: number) {
// //     //생성자 함수
// //     this.name = name;
// //     this.age = age;
// //   }
// // }
// // const person04 = new Person2("Romeo", 24);
// // console.log(person04);

// // //인터페이스 + 클래스
// // //반드시 인터페이스 값을 가지고 있는 객체를 만든다면? implements
// // interface Person5 {
// //   name: string;
// //   age: number;
// // }

// // class Person6 implements Person5 {
// //   constructor(public name: string, public age: number) {}
// // }

// // const person05 = new Person6("나", 24);
// // console.log(person05);

// // --------------추상 클래스----------------- //
// // 추상화 : 형태가 없는 비정형화된 사물을 표현 한 것.
// // 어떤 클래스를 정의하기 위해서 추상적인 개념을 만들어 놓고 , 해당 추상적인 개념을 모티브로 클래스를 선언 & 생성 -js에도 있는 것

// //추상클래스 생성 - abstract
// abstract class Person7 {
//   constructor(public name: string, public age: number) {}
// }

// //추상클래스 확장 - extends
// class Person8 extends Person7 {
//   constructor(name: string, age: number, public loaction: string) {
//     super(name, age);
//     this.loaction = loaction;
//   }
// }

// const person06 = new Person8("Bruse", 21, "서울");
// console.log(person06);

// //static 속성 // 한번에 값 가져오기
// // class TestA {
// //   initialValue = 1;
// // }

// // const test01A = TestA.initialValue;
// //------------------------
// class TestA01 {
//   static initialValue = 1;
// }

// const test01A01 = TestA01.initialValue;

//Enum - Enumberalbe : 열거형 타입
// 오타 누락  값변경을 원천적으로 막기 위해.
// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }
// const user1 = {
//   name: "David",
//   // role: "ADMIN",
//   role: Role.ADMIN,
//   // id: 0,
// };
// const user2 = {
//   name: "David",
//   // role: "USER",
//   role: Role.USER,
//   // id: 1,
// };
// const user3 = {
//   name: "David",
//   // role: "GUEST",
//   role: Role.GUEST,
//   // id: 2,
// };

// console.log(user1, user2, user3);

//any타입
//리터럴타입 문자열을 통해 값을 추ㄹ혼
let test01: any = 10;
test01 = "hello";

let test02: unknown; // any보다 더 상위
test02 = "worlds";
test02 = 1;
// test02 = () => {};

let test03 = test01;

let test04: number = 20; // unknown 는 값(타입)을 무한정으로 받아올 수 있지만 값으로 쓸 수 없다. any는 둘다 가능
// test04 = test02;

//타입 제한
if (typeof test02 === "number") {
  test04 = test02;
}

//void 타입 (함수에서 많이 사용)
//반환값도 타입을 정의해야한다.
const func1 = (): string => {
  return "hello";
};

//반환값이 없을 땐 void ==> 값을 반환할게 없다는 의미
const func2 = (): void => {
  console.log("반환값이 없다");
};

let test05: void;
// test05 = 1; // 못한다.
test05 = undefined; // 가능하다. 왜냐면 void는 undefinde의 슈퍼타입이기 때문

// 최강자 never --> 어떤 값도 받질 못한다.
let test06: never;

// test06 = 1;
// test06 = "ㅇㅇ";
// test06 = true;
// test06 = undefined;
// test06 = any;
// test06 = null; // 다 에러 뜸
//그럼 언제? == true에 값을 출력 할 게 없을 때. 사실 억지로 만들어 낸 거고 사용한 경우가 없다.
// const func3 = (): never => {
//   while (true) {}
// };

// //타입 단언 - object타입은 값을 못 끌고 오지만 이런 형태를 가진다는걸 단언해주는 것.

// let obj: object = {
//   name: "Devid",
// };
// interface Nameable {
//   name: string;
// }
// //방법1
// let name1 = (<Nameable>obj).name;

// //방법2
// let name2 = (obj as Nameable).name;
// console.log(name1, name2);

//함수 ---------------------------//
//값이 정해지지 안으면 any를 줄 수 있다.
// 매개변수와 리턴값 모두 타입을 지정해 줘야한다.
const add = (a: number, b: number): number => {
  return a + b;
};

const printMe = (name: string, age: number): void => {
  console.log(`name : ${name} , age : ${age}`);
};

//구조적 타입 시스템을 적용해보자.
//함수 시그니쳐 라고 부른다. --> 콜백이 되면 점점 더 읽기 힘들어짐
const printMe01: (arg01: string, arg02: number) => void = (name, age) => {
  console.log(`name : ${name} , age : ${age}`);
};

//타입 별칭 --> 비교적 읽기 쉬움
type PrintMeFnc = (name: string, age: number) => void;
const printMe02: PrintMeFnc = (name, age) => {
  console.log(`name : ${name} , age : ${age}`);
};

//만약 객체가 들어온다면
interface Nameable02 {
  name: string;
}

const getName = (obj: Nameable02) => {
  return obj != undefined ? obj.name : "로딩...";
};
// 값이 아직 들어오지 않아. 시간이 걸려서 아직 값이 들어오지 않았다면 삼항연산자 --> 타입 가드를 설정했다 라고 말함
const dataResult = getName(undefined); // 문제발생
console.log(dataResult);

//유니온 타입으로 해보자
const getName00 = (obj: Nameable02 | undefined) => {
  return obj != undefined ? obj.name : "로딩...";
};
