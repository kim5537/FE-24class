const title = document.querySelector("#title");
const author = document.querySelector("#author");
const bookList = document.querySelector("#bookList");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const liItem = document.createElement("li");

  liItem.innerHTML = `${title.value} - ${author.value} <span>삭제</span>`;

  bookList.appendChild(liItem);

  title.value = "";
  author.value = "";

  const delButtons = document.querySelectorAll("span");
  delButtons.forEach((delButton) => {
    delButton.addEventListener("click", function () {
      //선택된 엘아이를 구하려면 한번 부모쪽으ㅗㄹ 올라간다.
      this.parentNode.parentElement.remove(this, this.parentNode);
    });
  });
});
