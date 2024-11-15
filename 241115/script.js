// 콜백 함수 ============================
// 콜백 함수란?  : 함수안의 함수 선언 . 호출
// 함수의 호출을 다른 함수가 결정 짓는다

const displayLetter = () => {
  console.log("A");
  setTimeout(() => {
    console.log("B");
    setTimeout(() => {
      console.log("c");
      setTimeout(() => {
        console.log("D");
        setTimeout(() => {
          console.log("Stop~!");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

displayLetter();

const likePizza = true;

const pizza = new Promise((resolve, reject) => {
  if (likePizza) resolve("피자를 주문한다.");
  else reject("피자를 주문하지 않는다.");
});
//d약속 선언문 이기 때문에 실행을 해야한다
``;
//실행을 하는 것 = then 이다.
