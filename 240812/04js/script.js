const items = document.querySelectorAll("article");
//유사배열의 형태를 띤다
const aside = document.querySelector("aside");
const close = aside.querySelector("span");

items.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    const video = e.currentTarget.querySelector("video");
    video.play();
    // //마우스가 나가도 계속 재생됨
  });

  item.addEventListener("mouseleave", (e) => {
    e.currentTarget.querySelector("video").pause();
  });

  // 클릭시 나오는 모달
  item.addEventListener("click", (e) => {
    let tit = e.currentTarget.querySelector("h2").innerText;
    let txt = e.currentTarget.querySelector("p").innerText;
    let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

    aside.querySelector("h1").innerText = tit;
    aside.querySelector("p").innerText = txt;
    aside.querySelector("video").setAttribute("src", vidSrc);

    aside.querySelector("video").play();
    aside.classList.add("on");

    close.addEventListener("click", () => {
      aside.classList.remove("on");
      aside.querySelector("video").pause;
    });
  });
});
