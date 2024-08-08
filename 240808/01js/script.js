const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  window.open("./notice.html", "popup", "width=300 height=500");
  //3가지 인자값을 받는 open = "경로" ."파업의 이름", "팦업창 옵션"(어떤너비나 높이를 가지게 할 것인가,위치는 어디쯤?)
});

//버튼을 누르지 않더라도 팦업을 띄울수도 있다.
// window.open("./notice.html", "popup", "width=300 height=500");

//이벤트로 실행되는 것과 바로나오는 건 실행법이 다르다. 바로 실행되는 것은 팝업을 띄울것이냐는 알림창이 뜬다.
