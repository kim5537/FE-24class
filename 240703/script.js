const btns = document.querySelector(".controls");
const prevBtn = btns.querySelector(".prev");
const nextBtn = btns.querySelector(".next");
// console.log(btns, prevBtn, nextBtn);

const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");
// console.log(slide[4]);
//li태그인 이미지를 찾고 싶은데 이는 5개로 다수이다. 그래서 all로 찾는다.

const slideCount = slide.length;
// console.log(slideCount) ===>갯수를 말한다.;
const slideWidth = 200;
const slideMargin = 30;

let currentIdx = 0;

//복제한 5개의 li노드를 왼쪽으로 이동시키기 위한 함수
const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".slides li");
  const newSlideCount = currentSlides.length;
  console.log(newSlideCount);
  const newWidth = `${
    (slideWidth + slideMargin) * newSlideCount - slideMargin
  }px`;
  slides.style.width = newWidth;
};
// ``변수와 문자를 한번에 쓰겠다. ${}==변수

//복제한 5개의 li노드를 왼쪽으로 이동 함수 2
const setInitialPos = () => {
  const initalTransLateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = `translateX(${initalTransLateValue}px)`;
};

//li 노드를 복제하기 위한 코드
const makeClone = () => {
  for (let i = 0; i < slideCount; i++) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }
  //ㅇ위의 왼쪽 이동 함수를 클론에 넣어 클론 함수 읽으면 같이 실행
  updateWidth();
  setInitialPos();
  setTimeout(() => {
    slides.classList.add("animated");
  }, 100);
};

//복제 실행
makeClone();

//버튼 클릭을 통해서 실제 슬라이드를 출력시켜주는 함수
const moveSlide = (num) => {
  slides.style.left = `${-num * (slideWidth + slideMargin)}px`;
  currentIdx = num;
  if (currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIdx = 0;
    }, 500);
    setTimeout(() => {
      slides.classList.add("animated");
    }, 600);
  }
};

//버튼 클릭 이벤트 함수
nextBtn.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
});

prevBtn.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
});

//자동슬라이드 기능 함수
let timer = undefined;

const autoSlide = () => {
  if (timer === undefined) {
    timer = setInterval(() => {
      moveSlide(currentIdx + 1);
    }, 3000);
  }
};

autoSlide();
//정지함수
const stopSlide = () => {
  clearInterval(timer);
  timer = undefined;
};

slides.addEventListener("mouseenter", () => {
  stopSlide();
});
slides.addEventListener("mouseleave", () => {
  autoSlide();
});

btns.addEventListener("mouseenter", () => {
  stopSlide();
});
btns.addEventListener("mouseleave", () => {
  autoSlide();
});
