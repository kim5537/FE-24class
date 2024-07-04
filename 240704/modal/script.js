const btn = document.querySelector("#open");
const modalBox = document.querySelector("#modal_contents");
const close = document.querySelector("#close");
console.log(close);

btn.addEventListener("click", () => {
  modalBox.classList.add("active");
});
close.addEventListener("click", () => {
  modalBox.classList.remove("active");
});

modalBox.addEventListener("click", function () {
  this.classList.remove("active");
});

//2015suseh jvscript를 만드는 기관 => es6문법을 선보였다.
//다양한 신문법이 굉장히 많이 나왔다. 이때 대표적인 문법이 화살표 함수였다. 전에는 function를 사용하였다.
//funtion= 화살표 함수는 함수의 선언과 호출의 위치가 중요하다. 선언 전 호출을 하면 오류가 먼저나는 화살표문법과 다르게  fuction은 가능하다.
//이를 hoiting이라고 한다.
