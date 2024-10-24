//// 제일 중요한 부분!!
// const arr: number[] = [1, 2, 3];

// const newArr = arr.map((it) => it * 2);

// console.log(newArr);
//map 의 타입을 정의 해야 할 때가 있다.
//map을 살펴보자 - 값을 받아서 콜백을 한다.
//명령형 방식으로 프로그래밍 코드를 작성하는 방식으로 끝내지 말고 파해쳐서 선언형 방식으로 코드를 작성 해 보자.

// unknown은 값을 줄 수 없다. 값을 받기만 한다. 그래서 애러가 생긴다. 그렇게 때문에 제네릭이 젤 필요할 때!!!
// const map = (arr: unknown[], callback: (item: unknown) => unknown): unknown[] => {};

//제네릭으로 만들기
//map 배열안의 아이템을 랜덤하게 뽑는다 그말은 같은 T타입이다.
const map = <T>(arr: T[], callback: (item: T) => T): T[] => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
};
// 이렇게 선언형으로 짜는 걸 hight-lever 함수라고 한다. (고급함수) - 우리가 커스텀 할 수 있기 때문에.

// 반대로 low-level 함수 = 명령형 방식(저급함수)
const arrTest = [1, 2, 3];
const result = arrTest.map((item) => item);
