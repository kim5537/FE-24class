//현재 우리눈에 보여지고 있는 문서 높이//innerHeight
//스크롤이 가능한 영역까지 포함한 문서의 높이 // scrollHeight
//즉 *scrollHeight-*innerHeight = documentHeight 라고 명하자. ==> 이걸 css에 적요하기 위해 퍼센트로바꿔야한다.
//스크롤이 가능한 영역까지 포함한 문서의 전체 높이 - 현제 우리 눈에 보이는 문서의 높이 = documentHeight
//*scrollY ==> 스크롤이 내려간 값.
//window.scrollY / documentHeight *100

const h1 = document.querySelector("h1");
const bar = document.querySelector(".bar");

//2
const percent = (scrollNum, documentHeight) => {
  return ((scrollNum / documentHeight) * 100).toFixed(0);
};

//1
window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;
  const documentHeight = document.body.scrollHeight - window.innerHeight;

  const per = `${percent(scrollNum, documentHeight)}%`;
  bar.style.width = per;
  h1.innerText = per;
});
