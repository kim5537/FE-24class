const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
//

//타원
//ellipse()

//ellipse(x,y,rediusX,rediusY, rotation,startAngle,endAngle,counterClock)

// ctx.beginPath();
// ctx.ellipse(300, 70, 60, 50, 0, 0, Math.PI * 2);
// ctx.closePath();
// ctx.strokeStyle = "red";
// ctx.stroke();

// ctx.beginPath();
// ctx.ellipse(150, 200, 80, 50, (Math.PI / 180) * -30, 0, Math.PI * 2);
// ctx.strokeStyle = "blue";
// ctx.closePath();
// ctx.stroke();

ctx.scale(1, 0.7);
/// 한번만 스케일 값을 주면 하단에 다 스케일이 들어가서 찌그러진 원을 그릴 때 스케일로 조정하는 것이 이득 일 수도 있다.

ctx.beginPath();
ctx.arc(200, 150, 80, 0, Math.PI * 2, true);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 150, 30, 0, Math.PI * 2, true);
ctx.closePath();
ctx.stroke();
