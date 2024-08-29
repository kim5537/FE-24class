const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const circle = {
  x: 100,
  y: 100,
  radius: 30,
  //이동시킬 좌표
  dx: 4,
  dy: 4,
  color: "#222",
};

const drawCircle = () => {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
  // ctx.fillStyle = circle.color;
  ctx.fillstyle = circle.color;
  ctx.fill();
};

const move = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //리셋을 시키면 붓처럼 쭉 그려지지 않는다. 반복문의 기본 리셋!

  // ctx.fillstyle = "rgba( 255, 255, 255, 0.5)";
  // ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawCircle();

  circle.x += circle.dx;
  circle.y += circle.dy;
  // 밖으로 안나가는 조건문
  if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
    circle.dx = -circle.dx;
  }
  if (
    circle.y + circle.radius > canvas.height ||
    circle.y - circle.radius < 0
  ) {
    circle.dy = -circle.dy;
  }
  requestAnimationFrame(move);
  //move를 반복시켜달라는 것. setinterval이랑 차이점은 시간을 지정하지 않는다.
};
move();
