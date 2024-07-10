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
