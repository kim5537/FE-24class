const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// 그라데이션

//createLinearGradient
//그라디언트 적용하는데 있어 시작점 좌표 x, y, 끝지점 x,y
//그라디언트 중간점 생성 함수
//addColorStop()
//어느 비율 , 색상)
//createRadialGradient
//(내부원의 x , y ,내부원의 반지름, 외부원 x,y,외부원반지름)

// const linGrad = ctx.createLinearGradient(0, 0, 0, 200);
// linGrad.addColorStop(0, "#000");
// linGrad.addColorStop(0.6, "#fff");
// linGrad.addColorStop(1, "#eee");

// ctx.fillStyle = linGrad;
// ctx.fillRect(0, 0, 100, 200);

// const radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
// radGrad.addColorStop(0, "white");
// radGrad.addColorStop(0.4, "yellow");
// radGrad.addColorStop(1, "orange");

// ctx.beginPath();
// ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
// ctx.fillStyle = radGrad;
// ctx.fill();

// // 패턴
// const img = new Image();

// img.onload = function () {
//   const pattern = ctx.createPattern(img, "repeat");
//   ctx.fillStyle = pattern;
//   ctx.fillRect(0, 0, 200, 200);
// };

// img.src = "./img/pattern.png";

//그림자
ctx.shadowColor = "#ccc";
ctx.shadowOffsetX = 15; // x에 15만큼 떨어져
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 10;

const radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
radGrad.addColorStop(0, "white");
radGrad.addColorStop(0.4, "yellow");
radGrad.addColorStop(1, "orange");

ctx.beginPath();
ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
ctx.fillStyle = radGrad;
ctx.fill();
