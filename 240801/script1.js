//사용자로 부터 이름 ,나이를 받고
//반드시 콜백함수를 통해 사용자의 값을 활용해 알림창으로  "안녕하세요 00님 나이가 00세 이네요"라는 구문 나오게

// const name = prompt("이름")
// const year = prompt("나이")

// function welcome () {

//   alert(`${name}님 어서오세요 ${year}세 이시군요`)
// }

////==== 해설 ======///

// function ShowData(name, age) {
//   alert(`${name}님 어서오세요 ${age}세이시군요`);
// }

// function getDate(callback) {
//   const userName = prompt("이름을 입력하세요");
//   const userAge = Number(prompt("나이를 입력하세요"));
//   callback(userName, userAge);
// }

// getDate(ShowData);

//인자값에 함수도 넣을 수 있다.

//자바스크립트 함수 1급시민
//자격요건
//1.함수가 일반 변수에 자료형으로 할당 가능
//2.다른 함수의 인자값으로 함수가 사용 될 수 있어야함
//3.다른 함수의 반환값으로 함수를 사용 할 수 있어야한다. --return문에 함수를 담을 수 있다.

///인자값으로 함수를 담을 수 있다.///
// function hello() {
//   return "안녕하세요";
// }

// function bye() {
//   return "안녕히가세요";
// }

// function userCheck(neme, fn) {
//   console.log(`${neme}님 `, fn());
// }

// userCheck("홍길동", hello);
// userCheck("염심이", bye);

///반환값으로 함수를 담을 수 있다.///
const init = () => {
  return (a, b) => {
    return a - b > 0 ? a - b : b - a;
  };
};

console.log(`${init()(10, 20)}`);
//고차함수//
//init을 한번 돌린후 안에 있는 return의 함수에 값을 넣기 위해. ${init()(30, 20)} 소괄호가 두개인 이유
