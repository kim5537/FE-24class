//맵드 타입
//기존의 객체타입을 기반으로 새로운 객체의 타입을 만들어주는 타입 제어 기능!

// interface User {
//   id: number;
//   name: string;
//   age: number;
// }

//사용자의 정보를 찾아오는 역할을 하는 함수
//반환값이 User과 동일하기 때문에 함수 뒤 출력값을 타입을 준다.
// const fetchUser = (): User => {
//   return {
//     id: 1,
//     name: "Davit",
//     age: 20,
//   };
// };

//사용자의 정보를 업데이트 역할을 하는 함수
// const updateUser = (user: User) => {
//   console.log(user);
// };

// updateUser({ id: 2, name: "Peter", age: 25 });
//그런데 난 age 값만 수정하고 싶다. 그러면 어떻게 할까?
// updateUser({ age: 25 }); // 에러가 난다. 왜냐면 updateUser 매개변수 형태로 User를 사용했기 때문에. 옵셔널 값을 주기에도 무리가 된다.

interface User {
  id: number;
  name: string;
  age: number;
}

// type PartialUser = {
//   [key in "id" | "name" | "age"]?:User[key]
// };
//이렇게도 가능하다.
type PartialUser = {
  [key in keyof User]?: User[key];
};

const fetchUser = (): User => {
  return {
    id: 1,
    name: "Davit",
    age: 20,
  };
};

const updateUser = (user: User) => {
  console.log(user);
};
