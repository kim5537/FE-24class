const canvas = document.querySelector("canvas");
const button = document.querySelector("button");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

//겹쳐진 요소 조절

ctx.fillStyle = "#ccc";
ctx.fillRect(100, 50, 100, 100);

//destination(먼저그려진 도형) source(나중에 그려진 도형)
//겹쳐져 있는 도형 요소들의 그래픽작없을 할 때
//globalCompositeOperation 속성을 사용
// ctx.globalCompositeOperation = "source-over"; //기본값
// ctx.globalCompositeOperation = "source-in"; //후요소의 겹쳐진부분을 짜른부분. 전 요소는 사라짐
// ctx.globalCompositeOperation = "source-out"; //전요소의 겹쳐진 부분을 짜른 부분. 전요소는 사라짐
// ctx.globalCompositeOperation = "source-atop"; //전요소와 후요소를 둘 나 표기하나 후요소는 겹쳐진 부분만 표시.
// ctx.globalCompositeOperation = "destination-atop"; //전요소와 후요소를 둘 나 표기하나 후요소는 겹쳐진 부분만 표시.
// ctx.globalCompositeOperation = "darken"; //전요소와 후요소를 둘 나 표기하나 후요소는 겹쳐진 부분만 표시.
// ctx.globalCompositeOperation = "lighter"; //전요소와 후요소를 둘 나 표기하나 후요소는 겹쳐진 부분만 표시.
ctx.globalCompositeOperation = "xor"; //전요소와 후요소를 둘 나 표기하나 후요소는 겹쳐진 부분만 표시.
ctx.fillStyle = "#222";
ctx.beginPath();
//사각형은 제외한 모든것들은 꼭해야줘야함
ctx.arc(100, 120, 50, 0, Math.PI * 2, false);
ctx.fill();
