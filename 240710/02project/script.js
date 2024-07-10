const pic = document.querySelector(".pic");
const imgs = document.querySelectorAll("img");

imgs.forEach((img) => {
  img.addEventListener("click", function () {
    imgs.forEach((sibling) => {
      if (sibling !== img) {
        sibling.classList.remove("active");
      }
    });
    this.classList.add("active");
    
    const desc = document.querySelector(".desc");
    const contents = document.querySelector(".content");

    contents.forEach((content) => {
      content.classList.remove("active");
    });

    //이미지와 매칭 되어지는 본문찾기
    const targetId = img.getAttribute("data-alt");
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.classList.add("active");
    }
  });
});
