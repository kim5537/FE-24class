////함수에서 만날 수 있는 전개연산자 구문
// const fruits = ["apple", "banana", "frape"];
// console.log(...fruits);

// function addNum(a, b) {
//   return a + b;
//   // const sum = a+b
//   // return sum //같다
// }
// console.log(addNum(1, 3));
// //문자열이 없어서 템플릿 리터널 안 씀.

// //인자값의 수에 선택사항이있음==>이때 전개연산자.

// function addNum(...numbers) {
//   let sum = 0; //null도 undfinde가능하지만 0이 더 낫다.
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }
// console.log(addNum(1, 3, 3, 4));
// //몇개가 나오던 리턴하게 하는 방법은 바로 반복문이다.! 범위를 외부에서 지정할수 있기 때문이다.
// // number는 numbers중에 하나다라고 해석할수있다.

// function displayFavorites(...favs) {
//   const str = `가장 좋아하는 과일은 ${favs}입니다`;
//   return str;
// }

// console.log(displayFavorites("사과", "포도", "토마토"));

// function displayFavorites(first, ...favs) {
//   const str = `가장 좋아하는 과일은 ${first}입니다`;
//   return str;
// }

// console.log(displayFavorites("사과", "포도", "토마토"));
// //first는 첫배열을 가져온다.
// //전개연산자가 매개변수에 들어올땐 무조건 마지막에 들어가야하는 법칙이 있다. 꼭 마지막에 적어주다.
// //따라서 마지막값을 빼오는 걸 현 예시에서는  할 수 없다.
