const output = document.querySelector("#output");

const arr = [2, 1, 3, 10];

//1. const arr1 = arr.map((item) => item * 2);
//// 1-1 map은 배열에만 사용가능. 배열을 새로운 배열로.// map도 함수 함수안에 함수==>콜백함수
////1-2 arr에 2,1,3,10을 가져와서 2를 곱한수를 arr1 에 넣는 함수

////1-3 forEach& fot&for of도 반복문이지만 원본 데이터를 바꿔버리고 map은 원본 데이터를 유지하고 바꿔주는 함수이다.
////1-4 jsx는  forEach& for등 조건,반복문을 사용할수없고 오로지 map을 사용 할 수 있다.

//기본형  arr.sort();
//sort는 기본적으로 오름차순 기능을 가진다. ==>1,10,2,3,으로 정렬
// 유니코드식으로 인식한다. = 앞에 숫자를 인식하여 배치.

//때문에 우리가 콜백을 사용하여 정렬시켜야한다.

// arr.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (a === b) {
//     return 0;
//   }
//   if (a < b) {
//     return -1;
//   }
// });

//콜백함수 (a,b)는 a와 b에 각 숫자를 다 넣어보고 비교한다.
//return(값을 반환해주는 함수)에 1 , 0 ,-1 값을 주는이유. 배열은 0에서 부터 배열하기 시작한다. 따라서  1를 주면 뒤로 배치하고 상대적으로 -1를 앞으로 밀리게 되고 0은 그저 고정이다.

// arr.sort((a, b) => {
//   return a - b;
// });

//같은 결과 값이 나온다.

arr.sort((a, b) => {
  return b - a;
});

//내림차순
//문자앞에 연산자를 주지 않아서 -(b-a)라 적지 않고 b-a

// arr.sort((a, b) =>b - a); 로도 적을수있다.

output.innerText = arr;
