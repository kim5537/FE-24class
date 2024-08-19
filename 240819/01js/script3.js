//배열 메서드  map ,filtet,reduce
const numbers = [1, 2, 3, 4, 5];
// const newNunbers = numbers.map((number) => number * 2);
// console.log(newNunbers);

const newNunbers01 = numbers.map((number, index) => index + number * 3);
console.log(newNunbers01);
//아이템 인덱스 배열전체 ==>3개의 인자값을 가질수있다.

//fiter
const scores = [90, 35, 64, 88, 45, 92];
//85점이상만 담은 배열을 만들고 싶다.
const hightScores = scores.filter((score) => score >= 85);
console.log(hightScores);

// reduce
const numbers02 = [1, 2, 3, 4, 5];
let result = numbers.reduce((total, current) => total + current, 0);
console.log(result);
//인자값 = (누산기역할,현재값) => 함수 , 초기값
//누산기의 역할. 연산된 값을 누적 및 저장해놓는 변수의 역할(저장고역할)을 한다. (여기선 total)
//current가 각 요소를찾아오고 함수를 실행후 그 값을 total로 넣는것을 반복한다.
//누산기가 왜 필요한가? ts에서 고차함수가 나오는데 이때 명령형 $ 선언형 프로그래밍 함수를 할 때 명령형으로 map filter reduse를 다시 만나게 된다. ==> 저급함수

//고급함수? map filter들을 기능을 그대로  스스로 만들어내는데 이때 recuse를 많이쓴다.
//고급함수를 만드는 이유는 커스텀이 가능하기 때문이다.
