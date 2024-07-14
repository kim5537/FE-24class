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
  circle.style.animation = "circle linear 20s infinite";
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
const phone = document.querySelector(".phoneimg");
phone.addEventListener("click", () => {
  phone.style.animation = "phone linear 3s forwards";
  const roomimg = document.querySelector(".roomimg");
  roomimg.style.animation = "zoom linear 3s forwards";
  const Pbubble = document.querySelector(".Pbubble");
  Pbubble.style.animation = "bubble linear 3s forwards";
  const PMbubble = document.querySelector(".PMbubble");
  PMbubble.style.animation = "Mbubble linear 3s forwards";
  const deco3 = document.querySelector(".deco3");
  deco3.style.animation = "flower1 linear 2.2s infinite";
  const decoF3 = document.querySelector(".decoF3");
  decoF3.style.animation = "flower2 linear 2s infinite";
});

//------gaals 이벤트----//
const box = document.querySelector(".footer_text");
box.addEventListener("click", () => {
  const text = document.querySelector(".gtext");
  text.style.transition = "all 2s";
  text.style.opacity = "1";
});
