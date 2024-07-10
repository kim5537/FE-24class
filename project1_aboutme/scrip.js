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

//각요소 마우스 오버
// const illust1 = Document.querySelector(".Aillust");
// console.log(illust1);
// illust1.addEventListener("mouseover", () => {
//   const scale1 = Document.querySelector(".back1");
//   scale1.style.transform = "scale(1.2)";
// });

// Intersection Observer 객체 생성
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bubble = entry.target.querySelector(".Abubble");
        console.log(bubble);
        // bubble.classList.add("active");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

// // 관찰할 대상 요소 선택
// const Aillust = document.querySelector(".Aillust");

// // Intersection Observer에 관찰할 요소 등록
// if (Aillust) {
//   observer.observe(Aillust);
// }
