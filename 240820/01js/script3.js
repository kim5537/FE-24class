//이터러블 문자열
let hi = "hello";

//for … of 반복문 사용 가능

for (let ch of hi) {
  // console.log(ch);
}

//전개연산자 구문 사용 가능

let chArray = [...hi];
// console.log(chArray);

//구조분해할당 사용 가능
let [ch1, ch2, ch3, ch4, ch5] = hi;
// console.log(ch1, ch2, ch3, ch4, ch5);

//이터러블 배열

const arr = [1, 2, 3, 4, 5];
// console.log(arr);

let it = arr[Symbol.iterator]();
console.log(it);
// it도 이터러블객체가 되었다.
console.log(it.next());
//{value: 1, done: false} arr의 상속으로 받아 첫번째 요소인 1을 가져온 것이고 done은 해당 요소를 찾아왔을때 뒤에 요소가 더 있는지 말한다. 따라서 요소 "5"까지 false 값을 재출하고 없을때부터 value:undefinde,done:true 값을 제출한다.

/// 이터러블한 객체가 되려면 이터레이터 객체속성을 가지고 있어야한다
//이터레이터 객체 속성을 가지면 next() 라는 메소드를 가지고 있고
//next ==> 반복문으로 무언가를 실행시키고자 할 때, 실행되는 매서드 함수이다.

///제너레이션 ==> 이터러블하지 않는 요소를 이터러블한 속성을 주기 위한 함수
//펑션뒤에 *가 붙는다. 그리고 yield 라는 값을 가진다.(일시정지라는 뜻)
function* fnc() {
  // console.log("1");
  // console.log("2");
  // console.log("3");
  yield 1;
  yield 2;
  yield 3;
}

const g1 = fnc();
console.log(g1);
//fnc {<suspended>} 라는 값을 주는데 suspended는 정지상태라는 뜻

// console.log(g1.next());
//{value: 1, done: false} 값을 재출한다. 꼭 이터러블객체에 next값과 같다.

//이미 next가 찍혔으면 해당값을 넘기고 값을 들고온다
for (let i of g1) {
  console.log(i);
}
// for문을 사용할수있다.
