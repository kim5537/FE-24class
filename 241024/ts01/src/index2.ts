//함수
const func = (a: number, b: number): number => {
  return a + b;
};

// 디폴트 매개변수 주기(값이 없으면 David이 나옴)- 값을 string으로 추론한다. ------------------------
const func1 = (name = "David"): void => {
  console.log(`name: ${name}`);
};

//에러난다 타입은 같아야한다.
// const func101 = (name:number = "David"): void => {
//   console.log(`name: ${name}`);
// };

// 값 타입 불일치로 에러
// func1(1);

//선택적 매개변수 ---------------------- (name 값이 없으면 사용자 나옴)
// ? 를 주는 순간 유니온으로 undefind가 들어간다. 때문에 undefind을 타입가드 해줘야한다. 유니온은 타입가드 중요!!
// 꼭 !! 필수 매개변수는 선택적 매개변수 앞에 선언되어야한다
const self = (name = "사용자", age: number, tall?: number): void => {
  console.log(`${age}세 ${name}님 반갑습니다.`);
  if (typeof tall === "number") {
    console.log(`${age}세 ${name}님 키는 ${tall}입니다.`);
  }
};

// 매개변수의 값의 개수가 정해지지 않은 경우. - 전개연산자 사용 = 배열의 형태로 들어온다.
const getItem = (...rest: number[]): number => {
  let sum = 0;
  rest.forEach((it) => {
    sum += it;
  });
  return sum;
};

// 튜블도 가능 그러나 기본적 배열 매소드를 막지 못하는건 언제나 생각하자. -
//그러나 갯수가 정해지는 게 튜플이니까 4개의 인자값이 들어오면 에러가 난다.. 모순이지만 예시로 보여줌
const getItem00 = (...rest: [number, number, number]): number => {
  let sum = 0;
  rest.forEach((it) => {
    sum += it;
  });
  return sum;
};

// getItem00(1,2,3,4) /// 에러

// 타입 별칭으로 지정해보자
//타입 별칭으로 만들어진 걸 타입 시그니쳐로 준다
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b; // 타입 시그니쳐 = 함수 시그니처
//==> 타입 별칭을 생성 후 함수 시그니쳐로 적용했다.
