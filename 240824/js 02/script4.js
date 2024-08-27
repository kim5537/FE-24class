const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

//2차 베지에 함수
// quadraticCurveTo(조절점X, 조절점 Y,곡선이 끝나는 점에 좌표)

// ctx.beginPath();
// ctx.moveTo(50, 200);
// ctx.quadraticCurveTo(200, 50, 350, 200);
// // ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 200);
// ctx.quadraticCurveTo(100, 50, 150, 100);
// ctx.quadraticCurveTo(200, 150, 250, 100);
// ctx.quadraticCurveTo(300, 50, 350, 100);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.bezierCurveTo(90, 250, 310, 10, 350, 100);
// ctx.strokeStyle = "green";
// // ctx.closePath();
// ctx.stroke();

let triangle = new Path2D();
// triangle에 특정 스타일을 저장할수있는 인스턴스 객체이다.
//new Path2d로 만들수있다.

triangle.moveTo(100, 100);
triangle.lineTo(300, 100);
triangle.lineTo(200, 260);
triangle.closePath();
// ctx.stroke(triangle);

let circle = new Path2D();
circle.arc(200, 155, 50, 0, Math.PI * 2);

ctx.stroke(triangle);
ctx.fillStyle = "grean";
ctx.fill(circle);
