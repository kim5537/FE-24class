//keyof 연산자. : 객체 타입으로 부터 모든 속성의 key의 타입을 유니온 형식으로 추출해 주는 연산자.

// interface Person {
//   name: string;
//   age: number;
//   location: string;
// }

// const person: Person = {
//   name: "David",
//   age: 20,
//   location: "seoule",
// };

//타입으로도 가능 - 값을 담을수 있는게 interface와 차이가 있다.
type Person = typeof person;

const person = {
  name: "David",
  age: 20,
  location: "seoule",
};

// const getProperty = (person: Person, key: "name" | "age" | "location") => {
//   return person[key];
// };
//값이 늘 때 마다 3개를 다 수정해야하는 불편한 상황.

//값이 추가되면 keyof 알아서 추가해준다.
// const getProperty = (person: Person, key: keyof Person) => {
//   return person[key];
// };

/// 타입으로 만들기.
const getProperty = (person: Person, key: keyof typeof Person) => {
  return person[key];
}; // 왜 나만 에러날까 - 나중에 수정
