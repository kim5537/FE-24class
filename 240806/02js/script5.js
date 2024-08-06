const openButton = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");

openButton.addEventListener("click", function () {
  this.classList.add("btnActive");
  modalBox.classList.add("active");
});

const closeButton = modalBox.querySelector("#profile> button");
closeButton.addEventListener("click", function () {
  openButton.classList.remove("btnActive");
  modalBox.classList.remove("active");
});

//1.최초에 보여줘야하는 ui디자인
//2. 모달창이 오픈 되었을 때 ui디자인
//3. 스크립트를 활용하여 위 2개의 디자인 요소를 어떻게 크로스할 것 인가.
