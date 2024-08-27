const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
//사격형 형태를 도형으로 만들 땐 속성정의를 먼저한다.

//삼각형 형태의 도형을 만들 땐 도형 드로잉 선언을 먼저한다.
//beginPath()

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 200);
// ctx.stroke();
// ctx.closePath();

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 100);
ctx.lineTo(50, 150);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(250, 50);
ctx.lineTo(250, 150);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "rgb(0,200,0)";
ctx.fill();
