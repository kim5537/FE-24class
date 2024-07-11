const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    btn.innerText = "라이트모드로 바꾸기";
  } else {
    btn.innerText = "다크모드로 바꾸기";
  }
});

//contains==>함수안에 클래스값이 있는가? 있다면 true  그럼 아니라면? 이라는 의미의 else
