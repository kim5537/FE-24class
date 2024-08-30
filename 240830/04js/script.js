const coverWrap = document.querySelector(".coverWrap");
const coverHeight = window.innerHeight;
const contWrap = document.querySelector(".contWrap");
const progressBar = document.querySelector(".bar");
const header = document.querySelector("header");
const coverTitle = document.querySelector(".coverTitle");
const overlay = document.querySelector(".overlay");

//js에서 높이 주기. 페럴렙스 효과를 위해서.
coverWrap.style.height = `${coverHeight}px`;
contWrap.style.marginTop = `${coverHeight}px`;

//2
const percent = (scrollNum, documentHeight) => {
  return ((scrollNum / documentHeight) * 100).toFixed(0);
};

//1
window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;
  const documentHeight = document.body.scrollHeight;

  const per = percent(scrollNum, documentHeight);

  progressBar.style.width = `${per}%`;

  if (scrollNum >= coverHeight) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
    coverTitle.style.top = `${-scrollNum / 5}px`;
    coverWrap.style.backgroundPosition = `center ${-scrollNum / 15}px `;
    overlay.style.background = `rgba(0,0,0,${0.4 + scrollNum / 800})`;
  }
});

//v포인트
// 페럴렉스 개념
// css의 background-position위 수평 및 수직정렬값의 의미.

//coverWrap(이미지)의 높이 정의를 js에서 한 이유 와 하단요소 컨텐츠랩의 마진값. 1?
//1 ? 커버랩(이미지) 높이와 하단 요소 컨텐츠랩의 마진탑을 같은 크기로 가변하는 값을 주어 스크롤에 맞춰 줄어들게 만들었다.
// 따라서 해당 스크롤은  문서의 크기에서 화면의 크기를 빼지 않아도 된다. 왜냐? 우리가 이미 js에서 화면크기 innerHeight와 같은 크기를 0으로 수렴하게 가변값을 주었기 때문. 알아서 빠짐.

//2? 이미지 크기포지선 = `center ${-scrollNum / 15}px `의 의미
