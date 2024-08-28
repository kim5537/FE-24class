const canvas = document.querySelector("#canvas");
const toolbar = document.querySelector("#toolbar");

const ctx = canvas.getContext("2d");
// console.log(ctx);

//캔퍼스 크기
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - toolbar.offsetHeight;

//툴바를 뺀 캔버스
const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

let startX;
let startY;
let lineWidth = 2;
let isDrawing = false; // 마우스를 땐 상태

toolbar.addEventListener("change", (e) => {
  console.log(e);
  if (e.target.id === "stroke") ctx.strokeStyle = e.target.value;
  if (e.target.id === "lWidth") lineWidth = e.target.value;
});

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  startX = e.clientX; // clientX는 이벤트 객체 안에 있기 때문
  startY = e.clientY;
  // console.log(startX, startY);
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  ctx.beginPath();
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.lineTo(e.clientX, e.clientY - canvasOffsetY);
  ctx.stroke();
});

toolbar.querySelector("#reset").addEventListener("click", () => {
  // console.log("reset");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
