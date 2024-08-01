//1.배열 명확하게 이해하기
//2.반복문 적재적소
//3.내가원하는 기능 구현 함수
//윈도우 객체안에는 시간 관련된 내장 함수 존재.setInterval()
//주기적으로 반복실행할 것 // 시간의 간격은(밀리초기준) ==>서버공격할때 나. 핵을 쓸때 빨리 랜덤을 돌려 좋으 아이템때 스탑함.
//때문에 setInterval()은 멈출조건을 꼭 걸어준다.
//clearInterval ==> setInterval를 잡는 것.
//시간 관련 함수 3대장
// setInterval / clearInterval / setTimeout(특정시간 이후부터 실현)

//CB1 =======================js에서 자주만날 콜백함수 1번 예제
// let count = 0;
// const cbFunc = () => {
//   console.log(count);
//   if (++count > 4) clearInterval(timer);
// };

// const timer = setInterval(cbFunc, 300);
//증가연산자가 앞에 있어서 증가한 후 카운트와 비교하여 4가지 간다. 만약 증가가 카운트뒤에있다면 5까지 실행

//CB2 ======================js에서 자주만날 콜백함수 2번 예제
//map 함수는 배열안에 각각 개별 아이템을 찾아와서 어떠한 연산작업을 한 이후 다시 해당 아이템을 모아 새로운 배열로 생성한다.
//for는 찾아오기만 하고 새로 조합은 안하는거와 차이를 가진다는 것 기억할것
//배열은 다시 만들어줘야하는 경우가 많아 콜백인 경우가 많다.

const arr = [10, 20, 30];
const newArr = arr.map((item, index) => {
  console.log(item, index);
});
//item은 부모인 배열형 arr의 자식들을 말한다.
console.log(newArr);
//상위 로그는 (3) [undefined, undefined, undefined] 라고 미정의 값을 가진다고 말한다.

// const arr = [10, 20, 30];
// const newArr = arr.map((item, index) => item + 5 * index);
// console.log(newArr);
//어느 상황에서 중괄호를 쓰면 일반함수로 인식하여 새로운 배열 반환이 안된다. map에 자체내장되어있는 값 반환을쓰기위해선 중괄호가 없어야 한다.

//CB3 =======================js에서 자주만날 콜백함수 3번 예제
//setTimeout --> 일정시간 지연 후 실행.
//두개의 인자값을 받는데 처음엔 콜백이 들어간다. 두번째는 딜레이시간이 적힌다.

// setTimeout(function () {
//   console.log("click");
// }, 300);

//this 객체==========================================//
//일반적으로 현재 실행되고 있는 함수의 주체, 객체등의 아이템을 지칭한다.
//this가 지칭하는게 뭐낙 다양하다. 카멜레온 같은 느낌.

// setTimeout(function () {
//   console.log(this);
// }, 300);
//window를 찾아온다. 누구때문에 진행되었는지 찾아준 것.

//CB4 =======================js에서 자주만날 콜백함수 4번 예제
// const arr2 = [1, 2, 3, 4, 5];
// arr2.forEach((item) => {
//   console.log(this);
// });

// const arr2 = [1, 2, 3, 4, 5];
// arr2.forEach(function(item) {
//   console.log(this);
// });

//이때도 윈도우라고 뜬다...  그래서 어렵다

//window에 탐재된 시간 내장 함수에 this를 사용하면 무조건 윈도우를 찾아온다.
//일반적인 콜백함수 내에 주체가 되고 있는 아이템을 찾아오고 싶을 땐 직접 해당 인자를 언급하거나 경우에 따라 this객체를 사용
// const arr2 = [1, 2, 3, 4, 5];
// arr2.forEach((item) => {
//   console.log(item);
// });

//CB5 =======================js에서 자주만날 콜백함수 5번 예제
// document.body.innerHTML += `<button id="a"> click </button>`;
// document.querySelector("#a").addEventListener("click", function () {
//   console.log(this);
// });
//일반인 경우 잘 찾아옴 그러나...함수의 형태 종류에 따라 지칭하는 대상이 변한다.
// document.body.innerHTML += `<button id="a"> click </button>`;
// document.querySelector("#a").addEventListener("click", () => {
//   console.log(this);
// });
//윈도우를 찾아온다.....ㅠ
//자주 발생하는 윈도우가 뜨는 3가지 경우
//내장함수
//화살표함수

//CB6 =======================js에서 자주만날 콜백함수 6번 예제
//객체안에 있는 메서드 함수의 경우 this는 fuction인 경우 매서드 함수의 부모격인 객체를 찾아오지만, 화살표 함수를 사용하면 윈도우를 찾아온다.
// const obj = {
//   vals: [1, 2, 3],
//   logValues: function () {
//     console.log(this);
//   },
// };

// obj.logValues();
//logValues함수를 담고 있기때문 함수이다. - 매서드함수

// const obj = {
//   vals: [1, 2, 3],
//   logValues: function () {
//     console.log(this);
//   },
// };

// obj.logValues();

//객체 안 메서드 형식으로 정의한 함수는 외부에 별도로 존재하는 함수의 콜백함수로 사용할 시, 기존 객체와의 관계성이 사라진다.
// const arr3 = [4, 5, 6];
// arr3.forEach(obj.logValues);

//객체를 통해서 탄생된 매서드 함수를 콜백함수로 사용시 , 해당 요소의 부모를 찾아올 수 있도록 하는 방법은 없을가.

// const obj1 = {
//   name: "obj1",
//   func: function () {
//     const self = this;
//     return function () {
//       console.log(self.name);
//     };
//   },
// };

// const callback = obj1.func();
// setTimeout(callback, 1000);

//상단 코드보다 효율적으ㅗㄹ this 객체 사용하는 방법 = 바인딩(묵어두다)
// const obj1 = {
//   name: "obj1",
//   func: function () {
//     console.log(this.name);
//   },
// };

// setTimeout(obj1.func.bind(obj1), 1000);

//콜백함수 잘못 쓰면 콜백지옥이 시작 ==>디버깅하기힘들어지고 구문이 복잡해진다.
// setTimeout(
//   (name) => {
//     let cooffeeList = name;
//     console.log(cooffeeList);
//     setTimeout(
//       (name) => {
//         cooffeeList += `,${name}`;
//         console.log(cooffeeList);
//         setTimeout(
//           () => {
//             cooffeeList += `,${name}`;
//             console.log(cooffeeList);
//             setTimeout(
//               () => {
//                 cooffeeList += `,${name}`;
//                 console.log(cooffeeList);
//               },
//               500,
//               "카페라떼"
//             );
//           },
//           500,
//           "카페모카"
//         );
//       },
//       500,
//       "아메리카노"
//     );
//   },
//   500,
//   "에스프레소"
// );
//뒤에 최대 3개의 인자값을 넣을 수 있다 -- 에스프레소
//이렇게 반복되는데 fatch함수로 값을 들고오면서 일어나기 쉽다.
//잉 에러남 후에 강사님꺼 확인

//콜백지옥 빠져나오기 3가지 방법=======================================
//==방법1==//
//리팩토리
// let cooffeeList = "";

// const addLatte = (name) => {
//   cooffeeList += `,${name}`;
//   console.log(cooffeeList);
// };

// const addMoca = (name) => {
//   cooffeeList += `,${name}`;
//   console.log(cooffeeList);
//   setTimeout(addLatte, 500, "카페라떼");
// };

// const addAmericano = (name) => {
//   cooffeeList += `,${name}`;
//   console.log(cooffeeList);
//   setTimeout(addMoca, 500, "카페모카");
// };

// const addEspress = (name) => {
//   cooffeeList = name;
//   console.log(cooffeeList);
//   setTimeout(addAmericano, 500, "아메리카노");
// };
// setTimeout(addEspress, 500, "에스프레소");

//어떤 함수가 실행되고 종료되면 또 다른 함수를 실행하고 싶어서 콜백을 사용하게 된다.

//==방법2==//
//앞 방법보다 더욱 나이스하다. - 추천하는 방법
//Promise()라는 프로토타입 사용 | 클래스를선언할때
//약속==> 이 함수가 정산적으로 실행된다면, 종료 ==>함수예약~!
//앞에 P는대문자로 시작해야하고 ㅡ new를 써야한다. ==>class로 생성된 프로토타입 함수이다.==>붕어빵틀

// new Promise();

// let likePizza = true;

// const pizza = new Promise((resolve, reject) => {
//   if (likePizza) {
//     resolve("피자를 주문");
//   } else {
//     reject("피자를 주문하지 않는다.");
//   }
// });

// Promise는 인자값으로 (,)==> 앞은 true일때 뒤는 false일때 실행할 것이다.

// pizza.then((result) => {
//   console.log(result);
// });

//실행할때  then을 사용

//==
new Promise((resolve) => {
  setTimeout(() => {
    const name = "에소프레소";
    console.log(name);
    resolve(name);
  }, 500);
})
  .then((prevName) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const name = `${prevName} 카페모카`;
        console.log(name);
        resolve(name);
      }, 500);
    });
  })
  .then((prevName) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const name = `${prevName} 카페라떼`;
        console.log(name);
        resolve(name);
      }, 500);
    });
  });

//resolve가 정상실행되면 then이 실행된다.==>함수가 실행된다.
