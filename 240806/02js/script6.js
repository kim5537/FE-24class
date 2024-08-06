const box = document.querySelector("#box");
box.addEventListener("click", (event) => {
  alert(`이벤트 발생 위치 : ${event.pageX}, ${event.pageY}`);
});
