//------ toggle event------//
const toggleBtn = document.querySelector(".trigger");
toggleBtn.addEventListener("click", () => {
  const gnbMobile = document.querySelector(".MobileList");
  if (gnbMobile.classList.contains(open)) {
    gnbMobile.style.right = "-190px";
    gnbMobile.classList.remove(open);
  } else {
    gnbMobile.style.right = "0px";
    gnbMobile.classList.add(open);
  }
  // gnbMobile.style.right = "0px";
  // if (gnbMobile.style.right == "0px") {
  //   toggleBtn.addEventListener("click", () => {
  //     gnbMobile.style.right = "-190px";
  //   });
  // } else {
  //   toggleBtn.addEventListener("click", () => {
  //     gnbMobile.style.right = "0px";
  //   });
  // }
  // gnbMobile.classList.add(".open");
  // this.classList.toggle(".active");
});

//------클릭시 상단 이미지 변경------//
const topSlide = document.querySelector("#slide");
topSlide.addEventListener("click", () => {
  const topImg = document.querySelector("#top_items");
  topImg.classList.toggle("active");
});

//------about me 이벤트----//
const illust = document.querySelector(".Aillust");

// console.log(illust);
illust.addEventListener("click", () => {
  const deco1 = document.querySelector(".deco1");
  deco1.style.opacity = "1";
  const Abubble = document.querySelector(".Abubble");
  Abubble.style.animation = "bubble linear 2s forwards";
  const MAbubble = document.querySelector(".AMbubble");
  MAbubble.style.animation = "Mbubble linear 2s forwards";
  illust.style.animation = "Aillust linear 1s forwards";
});
