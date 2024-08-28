const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// const img = new Image(); //정석. 이미지를 인스턴스객체로
// //꼭 객체 형태의 이미지를 가지고 올 수 있다.
// // img.addEventListener("load", () => {
// //   ctx.drawImage(img, 0, 0);
// //   //인자값. 이미지 , 출력 위치 .. .. 너비와 높이 (비필수)
// // });

// img.onload = function () {
//   // ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//   //출력이미지 출력위치 엑스와이 , 너비값 , 높이값
//   //너비와 높이는 비필수
//   ctx.drawImage(img, 100, 50, 280, 350, 160, 100, 140, 175);
// };
// img.src = "./img/cat.jpg";

const img = new Image();
img.onload = function () {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

img.src = "./img/bird.jpg";

ctx.beginPath();
ctx.arc(480, 380, 150, 0, Math.PI * 2, false);
ctx.clip();
