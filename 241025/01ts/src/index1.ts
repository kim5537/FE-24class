//제네릭을 함수에서 많이 사용하지만 제네릭을 다른 상황에서 사용해보자

//타입 별칭 + 인덱스타입 + 제네릭 사용하기

type Map2<T> = {
  [key: string]: T;
};

const stringMap2: Map2<string> = {
  name: "David",
  nickName: "peter",
};

const stringMap3: Map2<number> = {
  age: 20,
  birthYear: 2002,
};

//제내릭 + 인터페이스
interface KeyPair<T, U> {
  key: T;
  value: U;
}

const keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

const keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["0"],
};
// 예제2는 다른 파일에
