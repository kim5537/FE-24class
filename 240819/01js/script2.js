const hello = (name, message = "안녕하세요") => {
  console.log(`${name}님 ${message}`);
};
hello("원빈", "반갑습니다");
hello("원빈");

//2.전개연산자
//2_1. 함수의 매개변수
// const addNum = (num01, num02) => {
//   const result = num01 + num02;
//   return result;
// };
// console.log(addNum(1, 2));

//갯수를 예측할수없는 다수의 인자값이 들어가면 ?

const addNum = (...numbers) => {
  // 해당 인덱스를 배열을 형태로 가져온다라는뜻
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }

  return sum;
};

console.log(addNum(1, 2, 3, 4, 5));
//재활용이 가능한 코드

// 2-2) 참조타입 변수값의 독립화
const fruits = ["apple", "banana", "cherry"];
// favorite = [...fruits];
// fruits의 banana도  grape로 변경

const favorite = [...fruits];
//fruits는 banana로 나옴

favorite[1] = "grape";
console.log(fruits, favorite);

// 2-3 서로 다른 2개의 배열을 하나로 병합
const animal = ["bird", "cat"];
const fruits01 = ["melon", "fineapple"];

console.log(animal.concat(fruits01));
console.log([...animal, ...fruits01]);
//[]이 있어서 배열로 나온다 없으면 문자로 출력

//3. 객체 key 접근방법
//대괄호 표기법
const book = {
  title: "자바스크립트",
  pages: 500,
};

book.published = "2024-08-19";
console.log(book);

console.log(book["title"]);

//객체의 키 생성 방법

const fn = () => {
  return "result";
};

const obj = {
  result: "함수 키",
};
console.log(obj);
//기본방법

const add = (a, b) => {
  return a + b;
};

const obj02 = {
  [fn()]: "함수 키",
  [add(10, 2)]: "계산 키",
};
console.log(obj02);
//대괄호는 해당 키값을 넣을때 값을 출력하기 때문에 [fu()]는 대괄호 표기법으로 불러온 것이다.

//객체 축약법===== 중요

//객체선언시 , key 네이밍 === value값으로 할당하고자 하는 매개변수의 이름이 동일할때 두번적지 않아도 된다.
let user = {
  name: "슛돌이",
};

user.age = 25;
console.log(user);
//기존법
const makeUser = (name, age) => {
  return {
    name,
    age,
  };
};
const user1 = makeUser("영심이", 20);
console.log(user1);

//객체에 심벌 키 사용방법
let id1 = Symbol();
let id2 = Symbol();
//id1 과 id2이 같아보이지만
console.log(id1 === id2);
//false로 나온다 둘을 같다라고 인식하지 않는다.
//임시적으로 진행되는 경우 정책으로 막아두지 않고 심볼값을 주는 경우가 있다.

const id = Symbol("id");
//id라는 이름을 부여받은 유일한 값이라 인식한다.
const tel = Symbol("telephone number");

const member = {
  name: "David",
  age: 20,
  [id]: 1234,
  [tel]: () => {
    prompt("당신의 전화번호는?");
  },
  //심볼을 통해 생성된 값은 큰따음표를 사용하진 않는다.
};

console.log(member);

for (let item in member) {
  console.log(`${item}`);
}

//심볼은 출력하지 않는데. 심볼은 객체 안에 있는 key값을 은폐하고 싶을 때 사용이 가능하다.
console.log(member[id]);
//대괄호 표기법이 아닌다. id로 생성된 심볼의 키값이 나온다. 대괄호 표기법이면 ["id"]
// console.log(member[tel]());

//4. 구조분해할당
//js 컴포넌트 => 함수형 (리엑트가 원래 class엿으나 2018에 facebook이 함수로 사용한다 선언했다.)
//컴포넌트끼리 상호작용할 때 구조분해할당을 한다.

const fruits02 = ["사과", "복숭아"];
// const apple = fruits02[0];
// const peach = fruits02[1];
// console.log(apple, peach);
//이전에 찾아오는 방법

//구조분해할당
//값을 분해하고자 하는 함수의 형태를 따라간다.
const [apple, peach] = fruits02;
//원래 배열형이였기에 배열로 가져온 것. 예를 들면 객체였다면 {}였다.
console.log(apple, peach);

//구조분해할당 전개연산자
let [teacher, ...studens] = ["kim", "lee", "park", "choi"];
//앞 kim만 teacher에 넣고싶다.
console.log(teacher, studens);

const member03 = {
  name: "David",
  age: 20,
};
const { name: userName, age } = member03;
console.log(userName, age);
//변수명을 name에서 userName으로 바꾼것이다.
