const canvas = document.querySelector("canvas");
const button = document.querySelector("button");
const ctx = canvas.getContext("2d");

const origin = {
  x: 200,
  y: 200,
};

const alpha = 0.7;
//스타일로 400을 줬으니 주석
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

//버튼을 만들고 버튼을 누를때마다 45도씩 회전시키자.

ctx.fillStyle = "#ccc";
// ctx.fillRect(200, 200, 100, 100);
ctx.fillRect(origin.x, origin.y, 100, 100);

// button.addEventListener("click", () => {
//   ctx.translate(origin.x, origin.y);
//   ctx.rotate((Math.PI / 180) * 30);
//   ctx.fillStyle = "#f00";
//   ctx.fillRect(0, 0, 100, 100);
//   //translate는 캔버스 원점을 바꾸는 것이라 버튼이 눌릴 때 마다 계속 200씩 움직인다.
// });

// button.addEventListener("click", () => {
//   ctx.translate(origin.x, origin.y);
//   ctx.rotate((Math.PI / 180) * 30);
//   ctx.fillStyle = "#f00";
//   ctx.fillRect(0, 0, 100, 100);
//   //translate는 캔버스 원점을 바꾸는 것이라 버튼이 눌릴 때 마다 계속 200씩 움직인다.
//   ctx.translate(-origin.x, -origin.y);
// });

//색상변경
const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};
button.addEventListener("click", () => {
  let color = randomRGB();

  ctx.globalAlpha = alpha;
  ctx.translate(origin.x, origin.y);
  ctx.rotate((Math.PI / 180) * 30);
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 100, 100);
  ctx.translate(-origin.x, -origin.y);
});
