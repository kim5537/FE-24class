const button = document.querySelector("button");
// const body = document.querySelector();
// //윈도으를 보면 document의 자식에 바디가 있기때문에 굳이 말하지 않아도 가져올수있다

button.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    button.innerText = "라이트모드로 바꾸기";
  } else button.innerText = "다크모드로 바꾸기";
});
