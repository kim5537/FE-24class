//------ toggle event------//
const toggleBtn = document.querySelector(".trigger");
toggleBtn.addEventListener("click", () => {
  const gnbMobile = document.querySelector(".MobileList");
  gnbMobile.classList.toggle("open");
});

//------클릭시 상단 이미지 변경------//
const topSlide = document.querySelector("#slide");
topSlide.addEventListener("click", () => {
  const topImg = document.querySelector("#top_items");
  topImg.classList.toggle("active");
});

//------about me 이벤트----//
const Ahand = document.querySelector(".Ahand");

// console.log(illust);
Ahand.addEventListener("click", () => {
  Ahand.style.animation = "Ahand linear 2s forwards";
  const deco1 = document.querySelector(".deco1");
  deco1.style.opacity = "1";
  const Abubble = document.querySelector(".Abubble");
  Abubble.style.animation = "bubble linear 3s forwards";
  const MAbubble = document.querySelector(".AMbubble");
  MAbubble.style.animation = "Mbubble linear 3s forwards";
  const Aillust = document.querySelector(".Aillust");
  Aillust.style.animation = "Aillust linear 2s forwards";
});

//------favorite 이벤트----//
const fillust = document.querySelector(".fillust");
fillust.addEventListener("click", () => {
  const Square = document.querySelector(".back2");
  Square.style.animation = "Square linear 0.5s forwards";
  const circle = document.querySelector(".decoimg");
  circle.style.animation = "circle linear 20s forwards";
  const Fbubble = document.querySelector(".Fbubble");
  Fbubble.style.animation = "bubble linear 3s forwards";
  const FMbubble = document.querySelector(".FMbubble");
  FMbubble.style.animation = "Mbubble linear 3s forwards";
  const fback = document.querySelector(".fback");
  console.log(fback);
  fback.style.scale = "1";
  fback.style.opacity = "1";
  fback.style.transition = "all 2s";
});

//------personality 이벤트----//
