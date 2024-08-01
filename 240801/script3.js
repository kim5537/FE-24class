// 현재보고 있는 웹브라우저 문서 내 버튼을 하나 만들어주세요
//그리고, 해당 버튼을 클릭할때마다 웹브라우져 배경 생삭이 변경되도록 해주세요.
//변경되어야 하는 색상은 white yellow , aqua , purple 색상이며 마지막 purple색상 다음번 색상은 다시 흰색으로 돌아가며 무한 반복하면 된다.
//컬러는 배열로하면 편할 것 -->배열 내 인덱스값을 생각할 것.
//0부터 시작하는 인덱스값이 1개식 증가해야한다. = 증감연산자 필요
// 이벤트(클릭이벤트)

//버튼 생성
//document로 색상 변경
//배열 선언으로 색 넣기

// document.body.innerHTML += `<button id= "btn"> click </button>`;
// const btn = document.querySelector("#btn");
// let color = [white, yellow, aqua, purple];

// function colorList() {}

const color = ["white", "yellow", "aqua", "purple"];

document.body.innerHTML += `<button id= "btn"> 클릭 </button>`;
const btn = document.querySelector("#btn");

let i = 0;
btn.addEventListener("click", () => {
  i++;
  if (i >= color.length) i = 0;
  const bodyTag = document.querySelector("body");
  bodyTag.style.backgroundColor = color[i];
});
