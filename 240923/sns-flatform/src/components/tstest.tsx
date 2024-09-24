let num: number = 10;

// num = "hello";
// //d에러 생김

// const fnc = (a, b) => {
//   console.log("hello");
// };
// //에러 생김.

const fnc = (a: number, b: string): void => {
  console.log("hello");
};
