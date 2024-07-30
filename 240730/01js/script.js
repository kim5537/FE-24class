const boolean = false;

console.log(typeof boolean);

const test01 = null; //유효하지 않은 값. 값이 아니다. -->후에 값이 들어 갈수있음
const test02 = undefined; // 값이 미정임 . 정해지지 않았다는 값이 있다.

//변수 선언시 유의 사항
//변수명으로는 예약어 사용 불가
//document , window =>내장 키워드 (예약어)이기 때문에 사용 불가
//$ _ 영문  3가지만 변수명 첫단어로 가능. 숫자도 불가함
// 단 , 변수명은 중간 혹은 마지막에 숫자 가능
//변수명은 반드시 대.소문자를 가림

const name = "현빈";
const classroom = 201;
console.log(name + "님" + classroom + "호 강의실로 오세요");
//변수와 문자를 같이 쓰기 위한 문자 연산자를 반드시 써야했었다.

//템플릿 리터널문법
console.log(`${name} 님 ${classroom} 호 강의실로 어서오세요`);
//시작과 끝에 ``(빼틱)을 넣고 변수에 ${}

//--------------객체.
const jsBook = {
  //객체는 속성(property)이 있어야한다.
  //key: balue 형태를 가진다.
  title: "지옥에서 온 깃 허브",
  pages: 330,
};
//객체안에 담긴 값을 찾아 올 수 있다.
////온점 표기법
const jsBookTile = jsBook.title;
console.log(jsBookTile);

////대괄호 표기법
const jsBookPages = jsBook["pages"];
console.log(jsBookPages);

jsBook.title = "천국에서 온 깃허브";
console.log(jsBook);
//재할당해서 타이틀이 바뀌었다.

//----------배열//
const arr = ["red", "green", "blue"];

//index값으로 찾기. 0번을 찾은 것
console.log(arr[0]);

//length를 이용하여 총갯수 찾기
console.log(arr.length);

//마지막 값 찾기
console.log(arr[arr.length - 1]);

//---------심벌--
let testSym01 = Symbol();
let testSym02 = Symbol();

console.log(testSym01 === testSym02);
//같지 않는 값을 낸다. 유일무이하기때문에 다르다.

let id = Symbol("userId");
//()안에 공란이면 그냥 Symbol():12345로 뜨고 안에 값을 넣으면 Symbol(userId):12345
const member = {
  name: "David",
  [id]: 12345,
  //심볼 값은 대괄호를 가지고 있어야함
  //대괄호가 없다면 단순한 문자열이 되었을 것. 그러나 심볼의 []를 가져서 Symbol이라고 표기된다.
};
console.log(member[id]);
//찾아 올 때도 대괄호

//---함수
const fucTest = () => {
  console.log("함수");
};

///-----자료형 끝 ----

let a = 10;
let b = a;

console.log(a, b);

let obj1 = {
  c: 10,
  d: "ddd",
};

let obj2 = obj1;

console.log(obj1, obj2);

b = 15;
obj2.c = 20;
//d온점표기법으로 값 변경

console.log(a, b);
//원본과 복제값 중 복제값만 변경됨
console.log(obj1, obj2);
//원본과 복제값 둘 다 변경됨
//해소법

// const fruits = ["apple", "banana", "cherry"];

// const favorite = fruits;

// favorite[1] = "grape";
// console.log(fruits);
// banana가 사라지고 grape가 나옴. 전개연산자를 사용하고 반복문때는 map등을 사용한다.

const fruits = ["apple", "banana", "cherry"];

const favorite = [...fruits];

favorite[1] = "grape";
console.log(fruits);
//전계연산자 ... 사용

// const one = "20";
// const two = 10;

// const sum = one + two;

// console.log(typeof Number("20"));

console.log(parseInt("20.2"));
console.log(parseFloat("20.2"));

const num = 10;
console.log(typeof num.toString());

const num01 = null;
// console.log(typeof num01.toString());

console.log(typeof String(num));

console.log(Boolean("임"));
console.log(Boolean(0));
//조건문에 조건식에 값을 넣어주는 이유. 그래야 true가 되기 때문
//const 어쩌구 = "어저구"; if{어쩌구}

const number = prompt("자연수를 입력해주세요");
console.log(number);
//넘버로 형번환
