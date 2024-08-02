// const main = document.querySelector("main");
// // const profile = main.querySelector("main > #profile");
// //이렇게 css 선택자를 사용해서 가져올 수 있다.
// const h1 = main.querySelector("h1");
// const desc = document.querySelector("#desc");
// const user = desc.querySelectorAll(".user");
// //all를 사용하지않고 querySelector를 부르면 에러가 나지 않고 위에 하나만 찾아와 후반에 오류를 알게 되는 경우가 많다.
// //유사배열. == 99% 배열이 가지고 있는 속성을 가지고 있다.
// //유사배열은 배열과 다른 1%를 가지고 있다.
// console.log(user[user.length - 1]);
// //배열처럼 각 항목을 가져올 수 있다.

// // user.addEventListner("click", () => {
// //   console.log("click");
// // });
// // //셋중에 누구에게?? 에러뜸

// // user.forEach((item) => {
// //   item.addEventListener("click", () => {
// //     console.log("click");
// //   });
// // });
// // //이렇게 하면 전체를 클릭하면 이벤트 부여하기 가능

// const profile = document.getElementById("profile");
// //이렇게도 찾아올 수있다.
// //getElementById 메모리의 효율성이 극대로. ==> id중에서만 찾아본다.
// //querySelector는 전역요소에 모든 노드에서 찾아온다.
// //id만 찾기 때문에 메모리 효율 & 속도를 빠르게 할 수 있다.
// // const profile = main.getElementById("profile"); 으로 하면 에러가 뜬다
// //객체 속성을 반드시 document로 지정하고 가야한다.
// //부모요소를 이미 가져왔을 때 자식을 찾기엔 querySelector가 나을 수있다.
// const img = document.getElementsByClassName("image");
// // class 찾기도 있다.

// const h101 = document.getElementsByTagName("h1")
// //tag로 찾는 것도 있다.

// const desc = document.querySelector("#desc");
// //const desc = document.querySelector("#desc").innerHtml;이 오류가 나는 이윤, 하단에 iu를 desc로 찾아왔기 때문이다.
// const iu = desc.querySelectorAll(".user")[0].innerText;
// console.log(iu);
// console.log(desc.innerHTML);
// console.log(desc.textContent);
// console.log(desc.innerText);

const title = document.querySelector("#title");
//여기의 title은 그릇의 역할 = 변수

////////////////////////////예시작업

title.addEventListener("click", function () {
  this.innerText = "나의 프로필";
  this.style.backgroundColor = "black";
  //background를 사용하면 충돌나며 기존 스타일이 사라질수있으니 구체적으로 하나를 집어 바꾸는 것이 좋다.
  //스크립트는 카멜법을 사용한다. -는 읽지못한다.
  this.style.color = "#fff";
});
// 여기서는 title은 객체.-노드값이 들어갔기 때문 ==>객체뒤에 붙는 함수는 메서드라구 한다.
//화살표 함수를 사용하면 this는 윈도우를 가리친다 .따라서 뻥션으로 해야함
const pfImg = document.querySelector("#profile img");

pfImg.addEventListener("click", function () {
  this.src = "./img/pf2.png";
});

const firstP = document.querySelector("#desc > p:first-child");
console.log(firstP);
firstP.addEventListener("click", function () {
  this.innerHTML = "이름 : <b> 태연 </b>";
  //innerHTML은 태그를 인식한다. innerText는 그냥 알파뱃으로 본다.
});

const secondP = document.querySelector("#desc > p:nth-child(2)");
secondP.addEventListener("click", function () {
  // this.classList.add("active");

  // if (!this.classList.contains("active")) {
  //   this.classList.add("active");
  // } else {
  //   this.classList.remove("active");
  // }

  this.classList.toggle("active");
});
