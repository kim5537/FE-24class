const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//save()
//restore()

//1. save & restore를 활용한 작업.
// ctx.fillStyle = "#ccc";
// ctx.fillRect(10, 10, 100, 100);

// ctx.save();
// //여기서 부터 저장
// //캔퍼스의 위치를 이동시켜보자
// ctx.translate(150, 150);
// ctx.fill = "#222";
// ctx.fillRect(10, 10, 100, 100);

// ctx.fillStyle = "#f00";
// ctx.fillRect(50, 50, 80, 20);

// ctx.restore();
// //이 기준부터 캔퍼스 위치가 돌아간다.
// //세이브는 리스토어가 오기 전 까지 해당 공간에서만 활동한다.

// ctx.fillStyle = "#ff0";
// ctx.fillRect(50, 50, 80, 20);

//2. moveTo를 활용한 작업.
ctx.fillStyle = "#ccc";
ctx.fillRect(10, 10, 100, 100);

ctx.moveTo(150, 150);

ctx.fillStyle = "#222";
ctx.fillRect(160, 160, 100, 100);

ctx.fillStyle = "#f00";
ctx.fillRect(50, 50, 80, 20);
