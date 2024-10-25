//forEach문을 선언형 방식으로 타입을 정의한 예시
const forEach = <T>(arr: T[], callback: (item: T) => void) => {
  //foreach문은 반환하는 값이 없다.
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};
