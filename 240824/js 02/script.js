const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// canvas.getContext("2d");
//반드지 인자값으로 2d를 받아야한다. 꼭 위 문장을 걍 외우는거 좋다.
//인스턴스객체는 아니지만 인스턴스 객체처럼 가져다 쓸 수 있다.

const ctx = canvas.getContext("2d");

// ctx.fillStyle = "rgb(200,0,0)";
// //안의 색상을 말함. 문자열로 값을 받는다.
// ctx.fillRect(10, 10, 50, 100);
// //사각형을 그리는 것. (앞 두개 좌상단 좌표값 || 뒤 두개 우 하단 좌표값)
// //호토법 사용

// console.log(ctx);

ctx.fillStyle = "rgb(200,0,0)";
ctx.strokeStyle = "rgb(0,0,0,)";
ctx.fillRect(10, 10, 200, 100);
// ctx.strokeRect(10, 10, 200, 100);
ctx.fillStyle = "rgb(0,0,200";
ctx.fillRect(50, 50, 120, 100);

ctx.clearRect(70, 80, 80, 45);
