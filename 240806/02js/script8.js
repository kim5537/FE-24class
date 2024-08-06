document.querySelector("p").addEventListener("click", () => {
  console.log("p");
});
document.querySelector("section").addEventListener("click", () => {
  console.log("section");
});
document.querySelector("div").addEventListener("click", () => {
  console.log("div");
});

//웹 브라우저가 실행되면 html. js를 pasing(문서를 읽으며 기본적으로 실행될 수 있는 요소 실행)
//예로 웹 브라우저를 켜자말자, 상단에 알림이 나오게 한다면
// function testFnc() {
//   alert("시작");
// }

// testFnc();
//원리를 보자. 함수의 선언과 호출부를 써주고 저장을 하면 바로 실행된다. 이벤트가 없어도 실행된다는 것은 html과 js를 읽었고 그러면서 상단코드를 읽고 바로 실행한 것

//콜백은 부모가 핸들러(제어할수있는함수)를 부모에게 맡기는 것.console.log("p")가 콜백밖에 있다면 p를 바로 실행한다 이유는 콜백이 없기에 addEventListener를 받지못한것!!
//콜백함수로 있기에 클릭으로 제어할 수 있게된것이다.

// 다시 돌아와서 p를 클릭하면 div와 section도 불러와진다. 이런걸 이벤트버블링이라고 한다.

const elements = document.querySelectorAll("*");
// console.log(elements);
//배열의 형태를 띄고있다.
elements.forEach((element) => {
  element.addEventListener(
    "click",
    (e) => {
      // console.log(`e.target : ${e.target.tagName}`);
      //p를 클릭하면 e.target은 전부 p로찍힌다.
      console.log(
        `e.target:${e.target.tagName}///e.currentTarget:${e.currentTarget.tagName}`
        //currentTarget은 다 다르다. 이벤트가 일어난 곳을 말하기 때문
        //p부터 나열

        //캡쳐링는 상위요소인 html부터 가져오고 순차적으로 내려간다. 다끝나고 밑에부터 버블링해서 올라간다.
        //true를 써야만 한다.
      );
    }
    // true
    //캡쳐링을 위한 true
  );
});
