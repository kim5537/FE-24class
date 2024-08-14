//========search modal//

const searchBtn = document.querySelector(".fa-magnifying-glass");
// const closeBtn = document.querySelector(".close");

searchBtn.addEventListener("click", () => {
  document.querySelector(".modal-search").classList.add("active");
});

// closeBtn.addEventListener("click", () => {
//   document.querySelector(".modal-search").classList.remove("active");
// });

//1. section태그를 찾아와 클릭하면 모달닫기를 만들어준다 - 같은 함수를 두개 만들어야한다.
//2. 지금 방법- 한번에 찾아와서 하기
document.querySelectorAll(".close, section").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".modal-search").classList.remove("active");
  });
});

//========search bar//
const searchBar = document.querySelector(".search input[type='text']");

searchBar.addEventListener("focus", function () {
  this.parentElement.nextElementSibling.style.opacity = "1";
  //해당태그의. 부모의 . 다음번형재.스타일~~
});

searchBar.addEventListener("blur", function () {
  this.parentElement.nextElementSibling.style.opacity = "0";
});

//========accordion Event//
const firstContent = document.querySelectorAll(".accordion .content");

firstContent[0].style.display = "block";

const titles = document.querySelectorAll(".title");
titles.forEach((title) => {
  title.addEventListener("click", () => {
    //선택받은 애가 누구인지 알려줌
    document.querySelectorAll(".content").forEach((item) => {
      //모두에게 공평한 숨김 스타일지정
      item.style.display = "none";
    });
    titles.forEach((otherTitle) => {
      //선택받은 애를 뺀 애들을 말하는 말하는 함수.
      if (otherTitle !== title) {
        otherTitle.classList.remove("active");
        //나머지 요소들은 액티브를 빼겠다.
      }
    });

    let content = title.nextElementSibling;

    if (title.classList.contains("active")) {
      title.classList.remove("active");
      //다시누르면 꺼지는 함수
      content.style.display = "none";
    } else {
      title.classList.add("active");
      //액티브가 없다면 액티브를 주는 함수
      content.style.display = "block";
    }
  });
});
