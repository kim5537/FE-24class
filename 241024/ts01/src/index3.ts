//-------------------------매개변수와 업 개스팅 , 다운 캐스팅 (대수타입 설정)

// type A = () => number;
// type B = () => 10; //리터널

// let a: A = () => 10;
// let b: B = () => 10;

// a = b; // 가능  - 업 캐스팅
// // b = a // 불가  - 다운 캐스팅(특정 조건만 가능했음 대부분 안됨)

// // 그럼 매개변수가 다르다면 ??
// type C = (value: number) => void;
// type D = (value: 10) => void;

// let c: C = (value) => {};
// let d: D = (value) => {};

// // c = d; // 업 캐스팅 같은데  (에러)
// d = c; // 다운캐스팅 같은데 (가능)

// //인자값으로 객체다
// type Animal = {
//   name: string;
// };

// let animalFunc = (animal: Animal) => {
//   console.log(animal.name);
// };

// type Dog = {
//   name: string;
//   color: string;
// };

// let dogFunc = (dog: Dog) => {
//   console.log(dog.name);
//   console.log(dog.color);
// };

// // 보다싶이 animal이 슈퍼타입이다.

// // animalFunc = dogFunc; // 또 에러.
// // 이유는 슈퍼타입이 컬러를 가지고 있지 않기 때문에 이때는 유일하게 업 캐스팅만 일어난다.
// dogFunc = animalFunc;

// // 이를 보면 위에 c d 도 그렇다.
// //이러한 이유로 함수 매개변수의 값은 희소하게 다운 캐스팅이 허용 된다.

//---------------매개변수의 개수가 다른 경우 ---

// type Func1 = (a: number, b: number) => void;
// type Func2 = (a: number) => void;

// let func1: Func1 = (a, b) => {};
// let func2: Func2 = (a) => {};

// func1 = func2; // 당연히 매개 변수가 많은게 슈퍼타입이다
// func2 = func1; // 우리가 알고 있는 상식선에서 움직이면 된다.

// ------- 함수의 시그니처 -------------------------------------

// //함수 시그니처를 실제 실행 되는 함수 위에 올려 사용했다 = 함수 오버로딩
// // 같은 함수인  func 가 매개변수 개수가 1개일때와 3개 일 때가 있다면

// //함수의 시그니처를 오버로딩 시킨 상황
// function func(a: number): void;
// function func(a: number, b: number, c: number): void;

// //실제 함수  선언부
// function func(a: number, b?: number, c?: number) {
//   if (typeof b === "number" && typeof c === "number") {
//     //옵셔널한 값을 주어 유니온이 되면서 undefind 가 있다
//     console.log(a + b + c);
//   } else {
//     console.log(a * 20);
//   }
// }

// // 함수 실행
// func(1);
// func(1, 2); // 오버로드가 없기 때문에 실행 불가
// func(1, 2, 3);

// -----------------함수를 활용한 타입 가드 -----------------------------

//2-3년이 전 강좌를 보면 type 선언할때 I를 꼭 넣는다. (헝가리언 표기법)
// type IDog = {
//   name: string;
//   isBark: boolean;
// }; // 과거 방법

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// const warning = (animal: Animal) => {
//   // console.log(animal.isBark ? "짖다" : "안짖다") // 유니온 타입이니까 에러
//   if ("isBark" in animal) {
//     console.log(animal.isBark ? "짖다" : "안짖다");
//   } else if ("isScratch" in animal) {
//     console.log(animal.isScratch ? "긁다" : "안긁다");
//   }
// };

// 좋은 방법은 아니다 그래서 switch 문으로 바꿔서 했었다. 그런데 switch가 아닌 방법도 있다.
// 강아지 고양이 함수 따로 쓰기

//타입 단언 , is = 많이 사용하진 않지만 알면 좋다
const isDog = (animal: Animal): animal is Dog => {
  return (animal as Dog).isBark !== undefined;
  // isBark값이 없으면 리턴이 안된다. 즉 리턴값은 무조건 Dog일 때만 나옴
};
const isCat = (animal: Animal): animal is Cat => {
  return (animal as Cat).isScratch !== undefined;
};

const warning = (animal: Animal) => {
  if (isDog(animal)) {
    //isDog(animal) 가 트루일때 실행되는 if문
    console.log(animal.isBark ? "짖다" : "안 짖다");
  } else if (isCat(animal)) {
    console.log(animal.isScratch ? "긁다" : "안긁다");
  }
};
